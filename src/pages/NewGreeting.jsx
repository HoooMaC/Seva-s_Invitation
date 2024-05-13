import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import TopNavbar from "../components/TopNavbar";
import Button from "../components/Button";
import Background from "../components/Background";
import ModalSuccess, { ModalImagePreview } from "../components/Modal.jsx";

import "./NewGreeting.css";

// do we neeed this???
axios.defaults.withCredentials = true;

const NewGreeting = () => {
  const [success, setSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState();
  const [imageModalStatus, setImageModalStatus] = useState(false);
  const [file, setFile] = useState();

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = event => {
    setFile(event.target.files[0]);

    const reader = new FileReader();
    reader.onload = function (e) {
      setImagePreview(e.target.result);
    };

    // Baca isi file sebagai data URL
    reader.readAsDataURL(event.target.files[0]);
  };

  const onSubmit = event => {
    // console.log(event.target.elements.icon.file);
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", "0001test");
    formData.append("icon", file);
    formData.append("message", "0001test");

    axios
      .post(`${BASE_URL}/api/greetings`, formData)
      .then(res => {
        console.log(res);
        setSuccess(true);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(formData);
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
        <ModalSuccess
          title="Selamat"
          message="Pesan berhasil ditambahkan"
          buttonMessage="Kembali ke papan pesan"
        />
      )}
      {imagePreview && imageModalStatus && (
        <ModalImagePreview
          image={imagePreview}
          changeCallback={openIconInput}
          deleteCallback={deleteCurrentImage}
          exitCallback={() => setImageModalStatus(false)}
        />
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
          <form onSubmit={onSubmit}>
            <div className="greeting-form-container">
              <div className="greeting-form-body">
                <div className="identity">
                  <label
                    className="input-label"
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
                        <p>Upload</p>
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
                    className="input-field"
                    type="file"
                    name="icon"
                    id="icon"
                  />
                  <div className="input-wrapper">
                    <label className="input-label" htmlFor="name">
                      Nama
                    </label>
                    <input
                      className="input-field"
                      type="text"
                      name="name"
                      placeholder="Contoh : Fulan"
                    />
                  </div>
                </div>
                <div className="input-wrapper">
                  <label className="input-label" htmlFor="relation">
                    Hubungan (Opsional)
                  </label>
                  <input
                    className="input-field"
                    type="text"
                    name="relation"
                    placeholder="Contoh : Sepupu"
                  />
                </div>
                <div className="input-wrapper">
                  <label className="input-label" htmlFor="message">
                    Pesan
                  </label>
                  <textarea
                    className="input-field text-area"
                    name="message"
                    id="message"
                    placeholder="Contoh : Semoga Sakinah Mawaddah Warahmah"
                  ></textarea>
                </div>
              </div>
              <Button className="button-liquid">Submit</Button>
            </div>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default NewGreeting;
