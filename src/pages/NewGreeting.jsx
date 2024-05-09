import axios from "axios";
import { useState, useEffect, useRef } from "react";

import TopNavbar from "../components/TopNavbar";
import { PenToSquareIcon } from "../components/Icons";
import Button from "../components/Button";
import Background from "../components/Background";

import "./NewGreeting.css";

// do we neeed this???
axios.defaults.withCredentials = true;

const NewGreeting = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.name.value,
      relation: event.target.elements.relation.value,
      // icon: event.target.elements.icon.value,
      message: event.target.elements.message.value,
    };

    try {
      await axios.get(`${BASE_URL}/sanctum/csrf-cookie`);
      const response = await axios.post(`${BASE_URL}/api/greetings`, formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  
    // console.log(response.data);
  };

  return (
    <>
      <Background />

      <div className="container">
        <div className="col-container">
          <TopNavbar></TopNavbar>
          <form method="POST" onSubmit={onSubmit}>
            <div className="greeting-form-container">
              <div className="greeting-form-header">
                <PenToSquareIcon className="greeting-form-icon" />
                <div>
                  <h2 className="greeting-form-title">
                    TULISKAN{" "}
                    <span className="greeting-form-emphazises">
                      PESAN DAN DOA
                    </span>{" "}
                    UNTUK PENGANTIN
                  </h2>
                  <p className="greeting-form-subtitle">
                    Doa & Restu anda sangat berharga
                  </p>
                </div>
              </div>
              <div className="greeting-form-body">
                <div className="input-wrapper">
                  <label className="input-label" htmlFor="name">
                    Nama
                  </label>
                  <input
                    className="input-field"
                    type="text"
                    name="name"
                    required
                    placeholder="Contoh : Fulan"
                  />
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
                    className="input-field"
                    name="message"
                    id="message"
                    // cols="30"
                    rows="10"
                    placeholder="Contoh : Semoga Sakinah Mawaddah Warahmah"
                  ></textarea>
                </div>
              </div>
              <Button className="button-liquid">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewGreeting;
