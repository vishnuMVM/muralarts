import React, { useState } from "react";
import "./OurWorks.css";

import { useEffect } from "react";
import allImages from "../Murals/images";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
export default function OurWorks() {
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState(true);
  var ImagesArray = [];

  const animation = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        x: [-1000, 100, 0],
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.4,
        },
      });
    } else {
      animation.start({ x: -1000 });
    }
  }, [inView]);

  useEffect(() => {
    getImages();

    //  console.log(Object.values(allImages)
  }, []);
  const getImages = () => {
    ImagesArray = Object.values(allImages);
  };

  let imagesArray = {
    mural1:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885322/Murals/mural1_nx7oja.jpg",
    mural2:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885321/Murals/mural2_prslpj.jpg",
    mural3:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885322/Murals/mural3_sqxgkf.jpg",
    mural4:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885318/Murals/mural4_tbdlje.jpg",
    mural5:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885320/Murals/mural5_hveye5.jpg",
    mural6:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885320/Murals/mural6_wbo56t.jpg",
    mural7:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885321/Murals/mural7_ar5ftv.jpg",
    mural8:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885317/Murals/mural8_ckefij.jpg",
    mural9:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885320/Murals/mural9_s62wiw.jpg",
    mural10:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885323/Murals/mural10_boblof.jpg",
    mural11:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885316/Murals/mural11_gyjssu.jpg",
    mural12:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885323/Murals/mural12_t79wkc.jpg",
    mural13:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885323/Murals/mural13_o5fhcf.jpg",
    mural14:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885320/Murals/mural14_bn3fbc.jpg",
    mural15:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885322/Murals/mural15_ztjv81.jpg",
    mural16:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885316/Murals/mural16_wbl7pc.jpg",
    mural17:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885318/Murals/mural17_tsz4lz.jpg",
    mural18:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885319/Murals/mural18_wbxhwu.jpg",

    mural23:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655030441/IMG_4052_llyaqv.jpg",
    mural24:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022259/IMG_4040_hbnl1j.jpg",
    mural25:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022250/IMG_4032_pvxggt.jpg",
    mural26:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655030260/IMG_4063_ggbrq8.jpg",
    mural27:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022234/IMG_4021_pzan90.jpg",
    mural28:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022205/IMG_4056_lpnkzp.jpg",
    mural29:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022207/IMG_4070_y7hxps.jpg",
    mural22:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022225/IMG_4029_bc8byq.jpg",
    mural21:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022204/IMG_4077_smfvh0.jpg",
    mural20:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022226/IMG_4072_zfsk9r.jpg",
    mural19:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022274/IMG_4043_giqkwz.jpg",
    mural30:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022225/IMG_4029_bc8byq.jpg",
    mural31:"https://res.cloudinary.com/dtjeptilx/image/upload/v1655022264/IMG_4036_1_vdlohn.jpg",


    parthaFull:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885323/Murals/Partha_Bhupal_Reddy_2_c7je9y.jpg",
    parthaPortrait:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885316/Murals/Partha_Bhupal_Reddy_zbfccl.jpg",
  };

  // const viewMoreImages = () => {
  //   setIsClicked(true);
  //   setShow(false);
  // };
  return (
    <>
      <div className="container">
        <div className="row p-3">
          <motion.div
            className="col-12"
            animate={{ x: [0, 10, 0] }}
            transition={{ circle: "circIn", duration: 0.8 }}
          >
            <div className="our-works w-50 text-center d-flex flex-column justify-content-center p-3">
              <h1>Our Works</h1>
              <p className="mt-3">
                “Art is a language meant to speak the things that can't be
                said.” — John Demarco
              </p>
            </div>
          </motion.div>
          <motion.div
            className="card col-12 col-md-4 mb-3 border-0 "
            animate={{ x: [-1000, 10, 0] }}
            transition={{ type: "spring", stiffness: 2000, duration: 1.2 }}
          >
            <img className="m-1 mural-img" src={imagesArray.mural23} alt="mur" />
          </motion.div>

          <motion.div
            className="card col-12 col-md-4 mb-3 border-0"
            animate={{ y: [1000, 10, 0] }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
          >
            <img className="m-1 mural-img" src={imagesArray.mural24} alt="mur" />
          </motion.div>

          <motion.div
            className="card col-12 col-md-4 mb-3 border-0"
            animate={{ x: [1000, 10, 0] }}
            transition={{ type: "spring", stiffness: 2000, duration: 1.2 }}
          >
            <img className="m-1 mural-img" src={imagesArray.mural28} alt="mur" />
          </motion.div>

          <motion.div
            className="card col-12 col-md-6 mb-3 border-0 "
            animate={{ x: [-1000, 10, 0] }}
            transition={{ type: "spring", stiffness: 2000, duration: 1.2 }}
          >
            <img
              className="w-100 m-1 mural-img"
              src={imagesArray.mural30}
              alt="mur"
            />
          </motion.div>

          <motion.div
            className="card col-12 col-md-6 mb-3 border-0"
            animate={{ y: [1000, 10, 0] }}
            transition={{ type: "spring", bounce: 0.25, duration: 1.2 }}
          >
            <img className="m-1 mural-img" src={imagesArray.mural27} alt="mur" />
          </motion.div>
        </div>
      </div>


      {/* Second set pics  */}
      <motion.div className="container" ref={ref} >
        <div className="row p-3">
          <div className="card border-0 col-12 mb-3 col-md-3">
            <img className="m-1 mural-img" src={imagesArray.mural29} alt="mur" />
          </div>

          <div className="card border-0 col-12 mb-3 col-md-3">
            <img className="m-1 mural-img" src={imagesArray.mural25} alt="mur" />
          </div>

          <div className="card border-0 col-12 mb-3 col-md-3">
            <img className="m-1 mural-img" src={imagesArray.mural1} alt="mur" />
          </div>

          <div className="card border-0 col-12 mb-3 col-md-3">
            <img className="m-1 mural-img" src={imagesArray.mural2} alt="mur" />
          </div>

            <div className="card border-0 col-12 mb-3 col-md-6">
        <img className="m-1 mural-img" src={imagesArray.mural26} alt="mur" />
      </div>
      <div className="card border-0 col-12 mb-3 col-md-6">
        <img className="m-1 mural-img" src={imagesArray.mural31} alt="mur" />
      </div>
      

       
          <div className="card border-0 col-12 mb-3 col-md-4">
            <img className="m-1 mural-img" src={imagesArray.mural7} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-8">
            <img className="m-1 mural-img" src={imagesArray.mural6} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-8">
            <img className="m-1 mural-img" src={imagesArray.mural5} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-4">
            <img className="m-1 mural-img" src={imagesArray.mural8} alt="mur" />
          </div>
        </div>
      </motion.div>
  
        {/* ThirdSet pics  */}
      <motion.div className="container">
        <div className="row p-3">
          <div className="card border-0 col-12 mb-3 col-md-4">
            <img className="m-1 mural-img" src={imagesArray.mural9} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-8">
            <img className="m-1 mural-img" src={imagesArray.mural10} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-8">
            <img className="m-1 mural-img" src={imagesArray.mural11} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-4">
            <img className="m-1 mural-img" src={imagesArray.mural12} alt="mur" />
          </div>
        </div>
      </motion.div>
      {/* Fourth Set pics */}
  <motion.div className="container" ref={ref} animate={animation}>
    <div className="row p-3">
    <div className="card border-0 col-12 mb-3 col-md-3">
        <img className="m-1 mural-img" src={imagesArray.mural13} alt="mur" />
      </div>
      <div className="card border-0 col-12 mb-3 col-md-3">
        <img className="m-1 mural-img" src={imagesArray.mural20} alt="mur" />
      </div>
      <div className="card border-0 col-12 mb-3 col-md-3">
        <img className="m-1 mural-img" src={imagesArray.mural15} alt="mur" />
      </div>
      <div className="card border-0 col-12 mb-3 col-md-3">
        <img className="m-1 mural-img" src={imagesArray.mural16} alt="mur" />
      </div>
      <div className="card border-0 col-12 mb-3 col-md-6">
            <img className="m-1 mural-img" src={imagesArray.mural3} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-6">
            <img className="m-1 mural-img" src={imagesArray.mural4} alt="mur" />
          </div>

      <div className="card border-0 col-12 mb-3 col-md-4">
        <img className="m-1 mural-img" src={imagesArray.mural19} alt="mur" />
      </div>
      <div className="card border-0 col-12 mb-3 col-md-8">
        <img className="m-1 mural-img" src={imagesArray.mural14} alt="mur" />
      </div>
      <div className="card border-0 col-12 mb-3 col-md-6">
        <img className="m-1 mural-img" src={imagesArray.mural17} alt="mur" />
      </div>
      <div className="card border-0 col-12 mb-3 col-md-6">
        <img className="m-1 mural-img" src={imagesArray.mural18} alt="mur" />
      </div>
    </div>
  </motion.div>


  

      
      
    </>
  );
}
