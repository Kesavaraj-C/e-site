import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Navbar, { inans } from '../Navbar/Navbar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import slider1 from '../../Assets/Images/hipster-863678_1280.jpg';
import slider2 from '../../Assets/Images/man-3373868_1280.jpg';
import slider3 from '../../Assets/Images/traveler-2203666_1280.jpg';

import btslider1 from '../../Assets/Images/m6_banner_01.jpg';
import btslider2 from'../../Assets/Images/m6_banner_02.jpg';
import btslider3 from '../../Assets/Images/m6_banner_03.jpg';
import './Home.css';
import axios from 'axios';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagAdd } from "react-icons/io5";
import cusClrimg1 from '../../Assets/Images/download.svg';
import cusClrimg2 from '../../Assets/Images/download (1).svg';
import cusClrimg3 from '../../Assets/Images/download (3).svg';
import cusClrimg4 from '../../Assets/Images/download (2).svg';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


// import required modules
import { Navigation } from 'swiper/modules';

const Home = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState([]);
  const bathil = useContext(inans);
  // console.log("Search", bathil);

  // Fetch products
  async function products() {
    const data = await axios.get("https://fakestoreapi.com/products");
    setItems(data.data);
  }

  useEffect(() => {
    products();
  }, []);

  useEffect(() => {
    if (bathil) {
      const filterData = items.filter(data => data.category.toLowerCase().trim() === bathil.toLowerCase().trim());
      setFilter(filterData);
    } else {
      setFilter(items);
    }
  }, [bathil, items]);

  return (
    <>
              <Navbar />
      <div className="home-container">

        <div className="home-main">
          <Swiper navigation={true} modules={[Navigation,Autoplay]} 
            autoplay={{
              delay:3000,
              disableOnInteraction:true
            }}
          className="mySwiper">
            <SwiperSlide>
              <div className="home-slider">
                <img src={slider1} alt="" />
                <div className="home-content">
                  <p>COSTAL VIBE</p>
                  <h1>Effortless Elegance for seaside Living</h1>
                  <button>Discovery Now</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-slider">
                <img src={slider2} alt="" />
                <div className="home-content">
                  <p>COSTAL VIBE</p>
                  <h1>Effortless Elegance for seaside Living</h1>
                  <button>Discovery Now</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-slider">
                <img src={slider3} alt="" />
                <div className="home-content">
                  <p>COSTAL VIBE</p>
                  <h1>Effortless Elegance for seaside Living</h1>
                  <button>Discovery Now</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="home-slider_bottom-slider">
          <div className="bottom-slider">
            <div className="bottom-slider-content">
              <p>RADIANT REVERIE</p>
              <h2>Effortless Glamour Every Day</h2>
              <button>Show Now</button>
            </div>
            <img src={btslider1} alt="" />
          </div>
          <div className="bottom-slider">
            <div className="bottom-slider-content">
              <p>RADIANT REVERIE</p>
              <h2>Effortless Glamour Every Day</h2>
              <button>Show Now</button>
            </div>
            <img src={btslider2} alt="" />
          </div>
          <div className="bottom-slider">
            <div className="bottom-slider-content">
              <p>RADIANT REVERIE</p>
              <h2>Effortless Glamour Every Day</h2>
              <button>Show Now</button>
            </div>
            <img src={btslider3} alt="" />
          </div>
        </div>

        <div className="home-products-container">
          <div className="home-products-title">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Top Trendings</li>
          </div>

          <div className="hm-products">
            {filter.map((x) => (
              <div className="homeproduct-container" key={x.id}>
                <div className="homeproduct-image">
                  <img src={x.image} alt="" />
                </div>
                <hr></hr>
                <div className="homeproduct_details">
                  <p>{x.category}<hr></hr></p>
                  <h4>{x.title}</h4>
                  <span>{x.price}</span>
                </div>
                <div className="homeproduct-responce">
                  <FaRegHeart className="hmp-res-icons" />
                  <IoSearch className="hmp-res-icons" />
                  <IoBagAdd className="hmp-res-icons" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="customerClr-container">
          <div className="customerClr-details1-container">
                <div className="customerClr-details1">
                  <div className="customerClr-icon">
                    <img src={cusClrimg1} alt="icons"></img>
                  </div>
                  <div className="customerClr-details1-icon">
                    <h3>Free Shipping</h3>
                    <p>Free shipping for orders over $140</p>
                  </div>
                </div>
                <div className="customerClr-details1">
                  <div className="customerClr-icon">
                    <img src={cusClrimg2} alt="icons"></img>
                  </div>
                  <div className="customerClr-details1-icon">
                    <h3>Money Guarantee</h3>
                    <p>Within 30 days for an exchange.</p>
                  </div>
                </div> <div className="customerClr-details1">
                  <div className="customerClr-icon">
                    <img src={cusClrimg3} alt="icons"></img>
                  </div>
                  <div className="customerClr-details1-icon">
                    <h3>Flexible Payment</h3>
                    <p>Pay with Multiple Credit Cards</p>
                  </div>
                </div> <div className="customerClr-details1">
                  <div className="customerClr-icon">
                    <img src={cusClrimg4} alt="icons"></img>
                  </div>
                  <div className="customerClr-details1-icon">
                    <h3>Online Support</h3>
                    <p>24 hours a day, 7 days a week.customerClr-icon
                       </p>
                  </div>
                </div>
  
          </div>
        </div>
        <footer>
          <div className="footer-siteNote">
            <h1>Brand</h1>
            <p>Whether you're a trendsetter, a minimalist, or an adventurer at heart, <u>Brand</u> has something for everyone. Our diverse range of styles caters to various persons.</p>
            <div className='footer-siteNote-link'>
                <FaFacebookF  className='footer-linkContainer'/>
                <RiTwitterXLine className='footer-linkContainer'/>
                <FaInstagram className='footer-linkContainer'/>
                <MdEmail className='footer-linkContainer'/>
            </div>
          </div>
          <div className="footerAbout">
            <h2>About</h2>
            <li>Our Story</li>
            <li>Mission & Values</li>
            <li>Meet the Team</li>
            <li>Sustainability Efforts</li>
            <li>Brand Partnerships</li>
            <li>Influencetr collabrations</li>
         </div>
          <div className="footerAccessibility">
            <h2>Accessibilty</h2>
            <li>Accesibility Statement</li>
            <li>Site Map</li>
            <li>Web Accessability options</li>
            <li>ADA Compliance</li>
            <li>Privacy policy</li>
            <li>Terms of Service</li>
         </div>
          <div className="footerCommunity">
            <h2>Join Our Community</h2>
            <li>Vip Membership</li>
            <li>Loyalty Program</li>
            <li>Customer Reviews</li>
            <li>Style Forums</li>
            <li>Job Openings</li>
            <li>Cilture and Values</li>
          </div>
          <div className='footerCusMail'>
            <h1>Lets's get in touch</h1>
            <p>Sign up for our newsletter and receive 10% off your</p>
            <div className='footerCusMail-input'>
              <input type="text" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
