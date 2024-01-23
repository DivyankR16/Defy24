import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/LandingComponents/Navbar';
import Footer from '../components/LandingComponents/Footer';
import ReactPlayer from 'react-player'
const Videopage = () => {
  const { id } =useParams();
    return (
      <div className="bg-gray-950">
        <Navbar />
        <div className="max-w-full p-[3rem]">
          <div className=" bg-gray-400 relative pt-[56.25%]">
            <ReactPlayer
              className="absolute top-0 left-0"
              url="https://sapphire-brilliant-primate-963.mypinata.cloud/ipfs/QmQthd1Mihh3TT7GB4fGXkqdmBK2tNQDsDuWxZskiXgo63"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    );
}

export default Videopage