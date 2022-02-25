import React, { useState } from "react";
import "./OurWorks.css";

export default function OurWorks() {
  const [isClicked, setIsClicked] = useState(false)
const [show,setShow] = useState(true)
  let imagesArray = [
    "https://i.etsystatic.com/21982578/r/il/030fac/2445292938/il_fullxfull.2445292938_dz1p.jpg",
    "https://images.pexels.com/photos/6073142/pexels-photo-6073142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://5.imimg.com/data5/DB/PU/MY-10047594/female-clay-wall-murals-500x500.jpg",
    "https://i0.wp.com/credibleart.com/wp-content/uploads/2019/06/PicsArt_06-18-02.58.43.jpg?fit=2276%2C3034",
    "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2017/11/07172623/mixed-mural.jpg",
    "https://i.pinimg.com/originals/ac/c0/08/acc0086e6ebf1bbf26c6cac036adf592.jpg",
    "https://5.imimg.com/data5/RG/GE/ID/SELLER-59033630/img-20190131-wa0041-500x500.jpg",
    "https://5.imimg.com/data5/ANDROID/Default/2021/8/QS/GH/YQ/53612252/product-jpeg-500x500.jpg",
    "https://5.imimg.com/data5/VM/VO/QO/ANDROID-29654297/product-jpeg-500x500.jpg",
  ];
  let moreImages = ["https://i.pinimg.com/736x/a8/55/20/a85520117a82b7e71ed109040fc8baeb.jpg",
  "https://i.pinimg.com/736x/aa/cb/ac/aacbacb8146e115693bd8f958508333c.jpg",
    "https://i.pinimg.com/originals/d8/de/96/d8de966763618c66ef50ce88c46e916a.jpg",
    "https://www.wallskin.in/static/www/images/productImages/494x544/The-Royal-Ganesha-2-1611802198872.jpg",
    "https://wallpaper.dog/large/10703172.jpg",
    "https://i.pinimg.com/originals/fa/05/53/fa0553b5a13f7c68f87035f63bc3e39c.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-radha-krishna-wall-mural-kreativebrahma-ravichand.jpg"
]

  const viewMoreImages =()=> {
    setIsClicked(true)
    setShow(false)
  }
  return (
    <>
      <div className="our-works w-50 text-center d-flex flex-column justify-content-center p-3">
        <h1>Our Works</h1>
        <p className="mt-3">
          “Art is a language meant to speak the things that can't be said.” —
          John Demarco
        </p>
      </div>

      <div className="container">
        <div className="row">
          {imagesArray.map((item) => {
            return <div className="card mb-5 col-4">
              <img
                className="mb-3 m-3 mural-img shadow"
                height={350}
                src={item}
                alt="mural"
              />
            </div>;
          })}
        </div>
      </div>
     { show && (  <div className="view-more d-flex justify-content-center mb-3 mt-1">
        <button onClick={viewMoreImages} className=" btn btn-outline-success">View More</button>
      </div>)}
{isClicked &&(  <div className="container">
        <div className="row">
        <div className="card mb-5 col-6 shadow">
              <img
                className="mb-3 m-3 mural-img "
                height={350}
                src={moreImages[0]}
                alt="mural"
              />
            </div>
            <div className="card mb-5 col-6 shadow">
              <img
                className="mb-3 m-3 mural-img "
                height={350}
                src={moreImages[1]}
                alt="mural"
              />
            </div>
            <div className="card mb-5 col-4 shadow">
              <img
                className="mb-3 m-3 mural-img"
                height={350}
                src={moreImages[2]}
                alt="mural"
              />
            </div>
            <div className="card mb-5 col-4 shadow">
              <img
                className="mb-3 m-3 mural-img "
                height={350}
                src={moreImages[3]}
                alt="mural"
              />
            </div>
            <div className="card mb-5 col-4 shadow">
              <img
                className="mb-3 m-3 mural-img"
                height={350}
                src={moreImages[4]}
                alt="mural"
              />
            </div>
            <div className="card mb-5 col-6 shadow">
              <img
                className="mb-3 m-3 mural-img"
                height={350}
                src={moreImages[5]}
                alt="mural"
              />
            </div>
            <div className="card mb-5 col-6 shadow">
              <img
                className="mb-3 m-3 mural-img"
                height={350}
                src={moreImages[6]}
                alt="mural"
              />
            </div>

        
        </div>
      </div>)
}
    </>
  );
}
