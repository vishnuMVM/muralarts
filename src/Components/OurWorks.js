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
    mural19:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885322/Murals/mural19_u8hzqc.jpg",
    mural20:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885317/Murals/mural20_jzfsrv.jpg",
    mural21:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885316/Murals/mural21_x2uuey.jpg",
    mural22:
      "https://res.cloudinary.com/lokesh-webdev/image/upload/v1645885318/Murals/mural24_pyfswh.jpg",
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
            <img className="m-1 mural-img" src={imagesArray.mural1} alt="mur" />
          </motion.div>

          <motion.div
            className="card col-12 col-md-4 mb-3 border-0"
            animate={{ y: [1000, 10, 0] }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
          >
            <img className="m-1 mural-img" src={imagesArray.mural2} alt="mur" />
          </motion.div>

          <motion.div
            className="card col-12 col-md-4 mb-3 border-0"
            animate={{ x: [1000, 10, 0] }}
            transition={{ type: "spring", stiffness: 2000, duration: 1.2 }}
          >
            <img className="m-1 mural-img" src={imagesArray.mural3} alt="mur" />
          </motion.div>

          <motion.div
            className="card col-12 col-md-6 mb-3 border-0 "
            animate={{ x: [-1000, 10, 0] }}
            transition={{ type: "spring", stiffness: 2000, duration: 1.2 }}
          >
            <img
              className="w-100 m-1 mural-img"
              src={imagesArray.mural4}
              alt="mur"
            />
          </motion.div>

          <motion.div
            className="card col-12 col-md-6 mb-3 border-0"
            animate={{ y: [1000, 10, 0] }}
            transition={{ type: "spring", bounce: 0.25, duration: 1.2 }}
          >
            <img className="m-1 mural-img" src={imagesArray.mural5} alt="mur" />
          </motion.div>
        </div>
      </div>

      <motion.div className="container" ref={ref} animate={animation}>
        <div className="row p-3">
        <div className="card border-0 col-12 mb-3 col-md-3">
            <img className="m-1 mural-img" src={imagesArray.mural6} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-3">
            <img className="m-1 mural-img" src={imagesArray.mural7} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-3">
            <img className="m-1 mural-img" src={imagesArray.mural8} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-3">
            <img className="m-1 mural-img" src={imagesArray.mural9} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-6">
            <img className="m-1 mural-img" src={imagesArray.mural10} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-6">
            <img className="m-1 mural-img" src={imagesArray.mural11} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-4">
            <img className="m-1 mural-img" src={imagesArray.mural12} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-8">
            <img className="m-1 mural-img" src={imagesArray.mural14} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-8">
            <img className="m-1 mural-img" src={imagesArray.mural15} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-4">
            <img className="m-1 mural-img" src={imagesArray.mural16} alt="mur" />
          </div>
        </div>
      </motion.div>

      <motion.div className="container">
        <div className="row p-3">
 
          <div className="card border-0 col-12 mb-3 col-md-7">
            <img className="m-1 mural-img" src={imagesArray.mural17} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-5">
            <img className="m-1 mural-img" src={imagesArray.mural18} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-4">
            <img className="m-1 mural-img" src={imagesArray.mural19} alt="mur" />
          </div>
          <div className="card border-0 col-12 mb-3 col-md-8">
            <img className="m-1 mural-img" src={imagesArray.mural20} alt="mur" />
          </div>
        </div>
      </motion.div>
      
    </>
  );
}
