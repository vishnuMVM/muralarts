import React from 'react';
import "./Home.css"
import homeimage from "./homepage_image.jpg"
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import "react-carousel-animated/dist/style.css";


export default function Home (){


  const images = [
  "https://www.easywallprints.com/upload/designs/mahabharata-zoom-1.jpg",
  "https://cdn.shopify.com/s/files/1/2428/9197/products/3D-Elephant-Wallpaper-Murals-for-Living-Room-Wall-Art-Decor-Landscape-papel-tapiz-para-paredes-3d_530x@2x.jpg?v=1549003211",
  "https://www.teahub.io/photos/full/168-1685126_3d-wallpaper-for-bedroom-walls.jpg",
  "https://5.imimg.com/data5/HP/DL/TP/SELLER-14408999/radha-krishna-wall-mural-500x500.jpg",
  "https://loveincorporated.blob.core.windows.net/contentimages/gallery/d48c52a3-5372-4e7d-bc7a-024808210a22-3-sculpture-wallpaper-3D-mural.jpg",
  ];
  return(
    <div className='home'>
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
    carouselHeight="600px"
>
    {images.map((image, index) => (
        <img
            key={index}
            src={image}
            alt="test"
            style={{
                height: "500px",
                borderRadius: "20px",
                boxShadow: "0 7px 20px 2px rgb(150, 170, 180)",
                margin:"20px",
                width:"62vw",
            }}
        />
    ))}
</ReactCarousel>;

        <div className='text'>
        <h1>mural art</h1>
        <h4>As early as prehistoric times, humans have told stories and expressed themselves with murals. 
          From cave paintings to Banksy, people have ever been leaving their mark on earth around the world. Before home decor was a form of expression, there were murals found in nature. Murals give us exquisite art and depiction of life, scenery, religion, and traditions, displaying the diversity of cultures throughout history. When walking through buildings like public libraries, businesses, temples, churches, museums, and more, murals cover the walls to show elaborate art and transform spaces. 
          They are representative of the cultures they come from and the life they depict.
        </h4>

        </div>

    </div>

  )

}