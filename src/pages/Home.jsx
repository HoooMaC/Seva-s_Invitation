import { motion } from "framer-motion";
import TopNavbar from "../components/TopNavbar";

import Background from "../Background.jsx";

import galleryImage1 from "../assets/images/gallery/gallery_landscape (1).jpg";
import galleryImage2 from "../assets/images/gallery/gallery_landscape (2).jpg";
import galleryImage3 from "../assets/images/gallery/gallery_landscape (3).jpg";
import galleryImage4 from "../assets/images/gallery/gallery_landscape (4).jpg";
import galleryImagePotrait1 from "../assets/images/gallery/gallery_potrait (1).jpg";
import galleryImagePotrait2 from "../assets/images/gallery/gallery_potrait (2).jpg";
import galleryImagePotrait3 from "../assets/images/gallery/gallery_potrait (3).jpg";
import galleryImagePotrait4 from "../assets/images/gallery/gallery_potrait (4).jpg";

import "./Home.css";

import title from "../assets/images/Seva_Alham.png";

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

      <div className="width-container" style={{ marginTop: "16px" }}>
        <TopNavbar />
      </div>
      <section className="container">
        <img className="title" src={title} alt="" />
      </section>
      <section id={"gallery"} className="container">
        <div className="home-image-container">
          <motion.img
            whileHover={{ opacity: 0.5 }}
            src={galleryImage1}
            alt="foto pengantin"
            className="home-gallery-image"
          />
          <motion.img
            whileHover={{ opacity: 0.5 }}
            src={galleryImage2}
            alt="foto pengantin"
            className="home-gallery-image"
          />

          <motion.img
            whileHover={{ opacity: 0.5 }}
            src={galleryImagePotrait1}
            alt="foto pengantin"
            className="home-gallery-image"
          />
          <motion.img
            whileHover={{ opacity: 0.5 }}
            src={galleryImagePotrait2}
            alt="foto pengantin"
            className="home-gallery-image"
          />
          <motion.img
            whileHover={{ opacity: 0.5 }}
            src={galleryImage3}
            alt="foto pengantin"
            className="home-gallery-image"
          />
          <motion.img
            whileHover={{ opacity: 0.5 }}
            src={galleryImage4}
            alt="foto pengantin"
            className="home-gallery-image"
          />
          <motion.img
            whileHover={{ opacity: 0.5 }}
            src={galleryImagePotrait3}
            alt="foto pengantin"
            className="home-gallery-image"
          />
          <motion.img
            whileHover={{ opacity: 0.5 }}
            src={galleryImagePotrait4}
            alt="foto pengantin"
            className="home-gallery-image"
          />
        </div>
      </section>
      <section id={"story"} className="container">
        <img className="title" src={title} alt="" />
      </section>
    </>
  );
};

export default Home;
