import React from 'react'
import "./Home.css"
import Product from "./Product"
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import faker from 'faker'
import { ToastContainer }  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
  
 
  function slider(counter) {
    const slides = document.querySelectorAll(".home__image");

    slides.forEach((slide, index) => {
        if (index !== counter) {
            slide.style.visibility = `hidden`
            slide.classList.add(`image-${index}`)
        }
    })
    moveCorousal(counter, slides, slides.length)
}
function arrowplus (counter){
  const slides = document.querySelectorAll(".home__image");

  slides.forEach((slide, index) => {
      if (index !== counter) {
          slide.style.visibility = `hidden`
          slide.classList.add(`image-${index}`)
      }
  })
  if(slides){
    counter += 1 
    
    slides.forEach((slide, index) => {
      if (index === counter) {
          slide.style.visibility = `visible`
      }
      else {
          slide.style.visibility = `hidden`
      }
  })
  }
}

function moveCorousal(counter, slides, len) {

  if (slides) {

      if (counter >= len - 1)
          counter = 0
      else
          counter += 1

      slides.forEach((slide, index) => {
          if (index === counter) {
              slide.style.visibility = `visible`
          }
          else {
              slide.style.visibility = `hidden`
          }
      })

  }
 
 setTimeout(() => {
      moveCorousal(counter, slides, len);
  }, 9000)


}


function Home() {

  useEffect(() => (
    slider(0)
), [])
  
    return (
      
    <body>

<div className="home">
         <div className="home__toast-container">
                    <ToastContainer />
    </div>
          

            
  <div className="home__slider__container">
 
             
             <a
             className="arrows prev"
             onclick={arrowplus} 
             />
               
               <a
                 className="arrows next"
                 onclick={ arrowplus }
                 />  
               
                 <div className="home__slide">
                     <img
                         className="home__image "
                         src="https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2021/img/Events/XCM_Manual_1312971_1609082_sg_gw_pc_tallhero_2x_1500x600_-_limited_time_deals._CB657401181_.jpg"
                         alt="image0" />
                 </div>
                 <div className="home__slide">
                     <img
                         className="home__image "
                         src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
                         alt="image1" />
                 </div>
                 <div className="home__slide">
                     <img
                         className="home__image "
                         src="https://images-fe.ssl-images-amazon.com/images/G/65/digital/video/merch/Other/BRND_MTH21_GWBleedingHero_1500x600_Final_en-Multi_FT_PVD7131._CB665088518_.jpg"
                         alt="image2" />
                 </div>
                 <div className="home__slide">
                     <img
                         className="home__image "
                         src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Heros/D24082897_IN_CEPC_Graphics_3000x12000.5x._CB664256932_.jpg"
                         alt="image3" />
                 </div>
                
                 <div className="home__slide">
                     <img
                         className="home__image"
                         src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                         alt="image4" />
                 </div>
                 <div className="home__slide">
                     <img
                         className="home__image "
                         src="https://images-eu.ssl-images-amazon.com/images/G/40/Electronics/Store/allelynb/TH/GW_Tall_hero_CE_Wireless_headsets_1x_1500x600_EN._CB665747420_.jpg"
                         alt="image5" />
                 </div>
                
                 <div className="home__slide">
                     <img
                         className="home__image"
                         src="https://images-eu.ssl-images-amazon.com/images/G/02/prime/X-site/ft_premium_centre_desktop_hero_surprise._CB668382151_.png"
                         alt="image6" />
                 </div>
                 
                 <div className="home__slide">
                     <img
                         className="home__image "
                         src="https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/YjBiMDQyYjQt/YjBiMDQyYjQt-Y2YxMTU2YmEt-w1500._CB665782833_.jpg"
                         alt="image7" />
                 </div>
                
                 
             </div>






         <div className="home__row">
                
                <p className="banner__note">You are on amazon.com. You can also shop on Amazon India for millions of products with local delivery. <Link to="/"className="home__link">Click here to go to amazon.in</Link></p>
                 
         </div>
         
         <div className="home__row"> 
         <Product 
           id="1"
           title="Boat Rockers 450n Headphones,Wireless Earbuds, Bluetooth Headphones Wireless Earphones with Immersive Sound, Bluetooth 5.0 Headset with Mic"
           price={100}
           rating={4}
           image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
         
         />
         <Product 
           id="2"
           title="SteelSeries Apex 7 Mechanical Gaming Keyboard – OLED Smart Display – USB Passthrough and Media Controls – Tactile and Clicky – RGB Backlit (Blue Switch)"
           price={110}
           rating={5}
           image="https://m.media-amazon.com/images/I/81yOuAUQAiL._AC_UY218_.jpg"
         
         />
         </div>
         
         <div className="home__row"> 
         <Product 
           id="3"
           title="SkyTech Shadow 3.0 Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, GTX 1660 Super 6G, 1TB SSD, 16GB DDR4 3000, Windows 10 Home 64-bit, Black"
           price={1100}
           rating={4}
           image="https://m.media-amazon.com/images/I/81cUusLl06S._AC_UY218_.jpg"
         
         />           
         <Product 
           id="4"
           title="SkyTech Archangel 3.0 Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, RTX 2060 6G, 500GB SSD, 16GB DDR4 3000, RGB Fans, Windows 10 Home 64-bit, White"
           price={1400}
           rating={4}
           image="https://m.media-amazon.com/images/I/81sr9V05esL._AC_UY218_.jpg"
         
         />
         <Product 
           id="5"
           title="CYBERPOWERPC Gamer Master Gaming PC, AMD Ryzen 3 3100 3.6GHz, 8GB DDR4, Radeon RX 550 2GB, 240GB SSD, 2TB HDD, WiFi Ready & Win 10 Home"
           price={1200}
           rating={4}
           image="https://m.media-amazon.com/images/I/71UWB1iXGFS._AC_UY218_.jpg"
         
         />
         </div>
         
         <div className="home__row"> 
         <Product 
           id="6"
           title="SAMSUNG Odyssey G3 Series 27-Inch FHD 1080p Gaming Monitor, 144Hz, 1ms, 3-Sided Border-Less, VESA Compatible, Height Adjustable Stand, FreeSync Premium(6yhu80) SMOOTH TRANSITION 144Hz refresh rate ensures flawlessly smooth action."
           price={3000}
           rating={4}
           image="https://m.media-amazon.com/images/I/81XKPle6OAL._AC_UY218_.jpg"
         
         />
         
         </div>
         <div className="home__row"> 
         <Product 
           id="7"
           title="Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac"
           price={31}
           rating={5}
           image="https://m.media-amazon.com/images/I/61a0KNfNNNL._AC_UL320_.jpg"
         
         />
         <Product 
           id="8"
           title="Razer Basilisk v2 Wired Gaming Mouse: 20K DPI Optical Sensor, Fastest Gaming Mouse Switch, Chroma RGB Lighting, 11 Programmable Buttons, Classic Black"
           price={30}
           rating={4}
           image="https://m.media-amazon.com/images/I/61I8BjnzubL._AC_UL320_.jpg"
         
         />
         </div>

     </div>

    </body>
     
    )
}

export default Home
