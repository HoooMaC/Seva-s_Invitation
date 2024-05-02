import TopNavbar from "../components/TopNavbar";

import "./Home.css";

import title from "../assets/images/Seva_Alham.png";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <img className="title" src={title} alt="" />
    </>
  );
};

export default Home;
