import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

import TopNavbar from "../components/TopNavbar";
import Button from "../components/Button";
import Background from "../components/Background";
import ModalSuccess, { ModalImagePreview } from "../components/Modal.jsx";

import "./NewGreeting.css";
import Modal from "../Modal.jsx";

// do we neeed this???
axios.defaults.withCredentials = true;

const NewGreeting = () => {
  const [success, setSuccess] = useState();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({});

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
