import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { nullable, z } from "zod";
import { useForm } from "react-hook-form";

import TopNavbar from "../components/TopNavbar";
import Button from "../components/Button";
import Background from "../components/Background";
import ModalSuccess, { ModalImagePreview } from "../components/Modal.jsx";

import "./NewGreeting.css";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "../Modal.jsx";

// do we neeed this???
axios.defaults.withCredentials = true;

const fileSchema = z
  .instanceof(File)
  .refine(
    file => {
      // Check if the file type is an image
      if (!file.type.startsWith("image/")) {
        return false;
      }

      // Check the file size (e.g., maximum size 2MB)
      const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSizeInBytes) {
        return false;
      }

      return true;
    },
    {
      message: "File must be an image and less than 2MB",
    },
  )
  .refine(
    async file => {
      // Check the image dimensions
      const maxWidth = 1024; // Max width in pixels
      const maxHeight = 1024; // Max height in pixels

      return new Promise(resolve => {
        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () => {
          URL.revokeObjectURL(img.src);
          resolve(img.width <= maxWidth && img.height <= maxHeight);
        };

        img.onerror = () => {
          resolve(false);
        };
      });
    },
    {
      message: "Image dimensions must be less than 1024x1024 pixels",
    },
  );

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  icon: z.nullable(z.any()),
  relation: z.string().nullable(),
  message: z.string().min(8, "Message must be at least 8 characters long"),
});

const NewGreeting = () => {
  const [success, setSuccess] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [imageModalStatus, setImageModalStatus] = useState(false);
  const [file, setFile] = useState();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = event => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);

    const reader = new FileReader();
    reader.onload = function (e) {
      setImagePreview(e.target.result);
    };

    // Baca isi file sebagai data URL
    reader.readAsDataURL(event.target.files[0]);
  };

  const onSubmit = data => {
    // data.append("icon", file);
    console.log(`form data ${data.attributes}`);
    axios
      .post(`${BASE_URL}/api/greetings`, data)
      .then(res => {
        console.log(res);
        setSuccess(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSingleClick = event => {
    setImageModalStatus(true);
    event.preventDefault();
  };

  const openIconInput = () => {
    const imageInput = document.getElementById("icon");
    if (imageInput) {
      imageInput.click();
    }
  };

  const deleteCurrentImage = () => {
    setImagePreview(null);
    setFile(null);
  };

  return (
    <>
      <Background />
      {success && (
        <Modal>
          <ModalSuccess
            title="Selamat"
            message="Pesan berhasil ditambahkan"
            buttonMessage="Kembali ke papan pesan"
          />
        </Modal>
      )}
      {imagePreview && imageModalStatus && (
        <Modal>
          <ModalImagePreview
            image={imagePreview}
            changeCallback={openIconInput}
            deleteCallback={deleteCurrentImage}
            exitCallback={() => setImageModalStatus(false)}
          />
        </Modal>
      )}
      <div className="container">
        <div className="col-container">
          <TopNavbar></TopNavbar>
          <div className="greeting-form-header">
            <FontAwesomeIcon
              className="greeting-form-icon"
              icon={faPenToSquare}
            />
            <div>
              <h2 className="greeting-form-title">
                TULISKAN{" "}
                <span className="greeting-form-emphasizes">PESAN DAN DOA</span>{" "}
                UNTUK PENGANTIN
              </h2>
              <p className="greeting-form-subtitle">
                Doa & Restu anda sangat berharga
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="greeting-form-container">
              <div className="greeting-form-body">
                <div className="identity">
                  <label
                    className="input-label base-shadow"
                    htmlFor="icon"
                    onClick={
                      !imageModalStatus && imagePreview
                        ? handleSingleClick
                        : null
                    }
                  >
                    {imagePreview ? (
                      <>
                        <img src={imagePreview} className="image-preview" />
                        <p>Preview</p>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faCircleUser}
                          color="#d9d9d9"
                          size="2x"
                        />
                        <p>Upload</p>
                      </>
                    )}
                  </label>
                  <input
                    onChange={handleChange}
                    className="input-field base-shadow"
                    type="file"
                    name="icon"
                    id="icon"
                  />
                  {errors.icon && (
                    <p className="error-message">{errors.icon.message}</p>
                  )}
                  <div className="input-wrapper">
                    <label className="input-label" htmlFor="name">
                      Nama
                    </label>
                    <input
                      className="input-field base-shadow"
                      autoFocus
                      type="text"
                      name="name"
                      placeholder="Contoh : Fulan"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="error-message">{errors.name.message}</p>
                    )}
                  </div>
                </div>
                <div className="input-wrapper">
                  <label className="input-label" htmlFor="relation">
                    Hubungan (Opsional)
                  </label>
                  <input
                    className="input-field base-shadow"
                    type="text"
                    name="relation"
                    placeholder="Contoh : Sepupu"
                    {...register("relation")}
                  />
                </div>
                <div className="input-wrapper">
                  <label className="input-label" htmlFor="message">
                    Pesan
                  </label>
                  <textarea
                    className="input-field text-area base-shadow"
                    name="message"
                    id="message"
                    placeholder="Contoh : Semoga Sakinah Mawaddah Warahmah"
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="error-message">{errors.message.message}</p>
                  )}
                </div>
              </div>
              <Button
                disabled={isSubmitting}
                className="button-liquid base-shadow"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewGreeting;
