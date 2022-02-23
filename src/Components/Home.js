import React from 'react';
import "./Home.css"

export default function Home (){

  let imagesArray = ["https://www.desktopbackground.org/download/1280x720/2013/12/16/686355_sherlock-quotes-wallpaper-quotesgram_1920x1200_h.jpg","https://static.toiimg.com/photo/85272183.jpeg","https://www.gamespot.com/a/uploads/original/1557/15576725/3820079-demon.jpg","https://fictionhorizon.com/wp-content/uploads/2020/11/Hulk3.jpg","https://cdn.mos.cms.futurecdn.net/ytDTW3FMV5SswTnR5aYDgP.jpg","https://sportshub.cbsistatic.com/i/2021/12/09/942f17aa-238f-4adb-99cd-f77b9f7d34b8/tom-holland-got-original-iron-man-helmet-from-robert-downey-jr.jpg","https://geekireland.com/wp-content/uploads/2018/05/Iron-Man-3-3.png","https://st1.bollywoodlife.com/wp-content/uploads/2022/02/Power-star-Pawan-Kalyan-Rana-Daggubati-Bheemla-Nayak-New-Release-Date-Announcement.jpg","https://images.ottplay.com/images/bheemla-nayak-373",
  ,"https://a-static.besthdwallpaper.com/death-note-wallpaper-1280x720-70749_45.jpg","https://www.gamerevolution.com/assets/uploads/2019/07/Attack-on-Titan-Episode-60-Air-Date-1-1280x720.jpg","https://i.pinimg.com/originals/29/bd/43/29bd43134d3890480ca2a8b3b14098c6.jpg"]

  return(

    <div className='home'>
      <div className='container banner w-75 text-dark text-center p-5 mt-3 mb-3'>
      <h1 className='font-weight-bold'>Exquisite handcrafted murals</h1>
      <p className='normal-text'>Fiber-cast with a touch of Antiquity and Royal Elegance.
        Perfect adornments for home interiors and exteriors.</p>
      </div>

      <div className='container'>
      <div className='row'>
        {imagesArray.map((item)=>{
          return  <div className='col-12 mb-3 rounded-img shadow col-lg-4'>
          <img className='w-100' src={item} alt='murals' />
          </div>
        })}
         


 
      </div>

        
     
      </div>

    </div>

  )

}