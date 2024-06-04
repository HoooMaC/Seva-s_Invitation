import { motion } from "framer-motion";
import TopNavbar from "../components/TopNavbar";

import Background from "../Background.jsx";

import { galleryImages } from "../constants/gallery_images.js";

import "./Home.css";

import title from "../assets/images/Seva_Alham.png";
import Section from "../components/section.jsx";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <Background>
        <motion.div
          initial={{ right: "-50%", top: "-10%", scale: 1, opacity: 0 }}
          animate={{
            right: "-20%",
            top: 0,
            opacity: 1,
            scale: 2,
            transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
          }}
          className="circle-effect"
        />
        <motion.div
          initial={{ left: "-50%", bottom: 0, scale: 1, opacity: 0 }}
          animate={{
            left: "-20%",
            bottom: 0,
            scale: 2,
            opacity: 1,
            transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
          }}
          className="circle-effect"
        />
      </Background>

      <TopNavbar />
      <section className="container">
        <img className="title" src={title} alt="" />
      </section>

      <Section id={"gallery"}>
        <h2 className={"section-title"}>Gallery</h2>

        <div className="home-image-container">
          {galleryImages.map(image => (
            <motion.img
              whileHover={{
                scale: 2,
                // transition: { duration: 0.2 },
              }}
              src={image}
              alt="foto pengantin"
              className="home-gallery-image"
            />
          ))}
        </div>
      </Section>

      <Section id={"gift"}>
        <div>
          <FontAwesomeIcon
            icon={faGift}
            className={"gift-icon"}
            size={"10x"}
            color={"var(--clr-secondary)"}
          />
          <h2 className={"gift-title"}>
            SEND US SOME <span>LOVE</span>
          </h2>
          <h3 className={"gift-subtitle"}>Untuk kedua pengantin</h3>
        </div>
        <p className={"gift-content"}>
          Bagi Bapak/Ibu/Saudara/i yang ingin mengirimkan hadiah pernikahan
          dapat melalui:
        </p>

        <img
          className={"qris-item"}
          src="src/assets/images/temp/dummy-qris.png"
          alt="qris belum tersedia"
        />

        <p className={"gift-content"}>atau dikirim ke alamat</p>
        <h4 className={"gift-address"}>
          Jl. Baharuddin Yusuf, Tembilahan Kota, Kec. Tembilahan, Kabupaten
          Indragiri Hilir, Riau 29214
        </h4>
      </Section>

      <Section id={"closing"} className={"justify-end"}>
        <div style={{ justifySelf: "flex-end" }}>
          <h3 className={"closing-text1"}>TERIMA KASIH</h3>
          <h2 className={"closing-text2"}>Kami yang Berbahagia</h2>
          <h3 className={"closing-text3"}>KEDUA MEMPELAI & KELUARGA BESAR</h3>
        </div>
      </Section>
    </>
  );
};

export default Home;
