import React, { useEffect } from "react";
import "./Home.css";
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import "react-carousel-animated/dist/style.css";
import photomural from "./photomural.jpg";
import abstractmural from "./abstractmural.jpg";
import imagemural from "./imagemural.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function Home() {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        x: [-1000, 10, 0],
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.2,
        },
      });
    } else {
      animation.start({ y: [1000, 100, 0] });
    }
  }, [inView]);

  const images = [
    "https://www.easywallprints.com/upload/designs/mahabharata-zoom-1.jpg",
    "https://cdn.shopify.com/s/files/1/2428/9197/products/3D-Elephant-Wallpaper-Murals-for-Living-Room-Wall-Art-Decor-Landscape-papel-tapiz-para-paredes-3d_530x@2x.jpg?v=1549003211",
    "https://www.teahub.io/photos/full/168-1685126_3d-wallpaper-for-bedroom-walls.jpg",
    "https://5.imimg.com/data5/HP/DL/TP/SELLER-14408999/radha-krishna-wall-mural-500x500.jpg",
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d48c52a3-5372-4e7d-bc7a-024808210a22-3-sculpture-wallpaper-3D-mural.jpg",
  ];
  return (
    <div className="home">
      <motion.div
      className="carousel-div"
        animate={{ y: [-1000, 100, 0] }}
        transition={{ type: "spring", stiffness: 2000, duration: 1.2 }}
      >
        <ReactCarousel
          carouselConfig={{
            transform: {
              rotateY: {
                [BEFORE]: () => "rotateY(25deg)",
                [CENTER]: () => "rotateY(0deg)",
                [AFTER]: () => "rotateY(-25deg)",
              },
            },
          }}
          itemBackgroundStyle={{
            backgroundColor: "#a09b95",
            borderRadius: "3px",
            boxShadow: "8px 12px 14px -6px black",
          }}
          containerBackgroundStyle={{
            filter: "blur(7px)",
            backgroundColor: "#e1e0dc",
          }}
          carouselHeight="47.5vw"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="test"
              style={{
                height: "30vw",
                borderRadius: "20px",
                boxShadow: "0 7px 20px 2px rgb(150, 170, 180)",
                margin: "20px",
                width: "60vw",
              }}
            />
          ))}
        </ReactCarousel>
      </motion.div>
      ;
      <div className="maintext-continer">
        <motion.div className="text" ref={ref} animate={animation}>
          <h2>Mural Art</h2>
          <h4>
            As early as prehistoric times, humans have told stories and
            expressed themselves with murals. From cave paintings to Banksy,
            people have ever been leaving their mark on earth around the world.
            Before home decor was a form of expression, there were murals found
            in nature. Murals give us exquisite art and depiction of life,
            scenery, religion, and traditions, displaying the diversity of
            cultures throughout history. When walking through buildings like
            public libraries, businesses, temples, churches, museums, and more,
            murals cover the walls to show elaborate art and transform spaces.
            They are representative of the cultures they come from and the life
            they depict.
            <br /> <br />
            As art pieces, murals can make a bold statement, portray a beautiful
            scene, pay homage to a historical event or era and even add a splash
            of color to a child's room. While there is no shortage of images to
            capture in a mural, there are three general types of this kind of
            art: Photography murals, painted scenery or image murals, and
            abstract murals.
          </h4>
        </motion.div>

        <div className="text">
          <h2>Photography Murals</h2>
          <motion.img 
            src={photomural}
            alt="photography_mural"
            className="muralimage"
          />
          <motion.h4 >
            Murals that showcase photography can take on multiple forms. Whether
            a single photo or photo montage, art owners can celebrate their
            favorite photographs in a variety of styles. For example, a large
            three-paneled wall mural is a good medium for a landscape or
            cityscape photo. With advances in printing procedures and materials,
            photo murals can come in canvas, vinyl, aluminum or a photo board
            material. A benefit to printing photographs on these types of
            mediums is that they do not require glass to protect the picture.
          </motion.h4>
        </div>

        <motion.div className="text" >
          <h2>Painted Scenery or Image Murals</h2>
          <motion.img
            src={imagemural}
            alt="image_mural"
            className="muralimage"
          />
          <motion.h4 ref={ref} animate={animation}>
            When choosing a mural that consists of a painted scene or image of
            an item for your home, the first step is to determine what you find
            striking. Review all of your options. For example, do you have a
            favorite artist you want to showcase, or would you rather choose a
            painting that goes with a general decorating theme within your home?
            Painted murals for in-home purposes require matting and framing as
            part of their finishing process. Another type of painted mural
            includes outdoor murals which can be painted on the side of
            buildings, walls or used as art pieces in city parks or memorials.
          </motion.h4>
        </motion.div>

        <motion.div className="text" ref={ref} animate={animation}>
          <h2>Abstract Murals</h2>
          <img
            src={abstractmural}
            alt="abstract_mural"
            className="muralimage"
          />
          <h4>
            For abstract art lovers, choosing a mural in this fashion can be the
            perfect statement piece for your home. Obtaining abstract wall
            murals can entail either a trip to an art gallery or an online
            search. These pieces can either be one giant canvas or can be
            divided into multiple sections. Using abstract murals is a good way
            to create a modern or contemporary feeling in a home or business.
          </h4>
        </motion.div>
      </div>
    </div>
  );
}
