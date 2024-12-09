import Footer from "@/layout/Footer/Footer";
import back from "../assets/images/visionMission2.png";
import processFlow from "../assets/images/processFLow2.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState } from 'react';
import '../assets/style/index.css';

import image3 from "../assets/images/aboutUsPhilHealth.png";

import midWife from "../assets/images/midwife.png";
import aboutUs from "../assets/images/aboutUs.png";


function AboutUs() {


  const [currentIndex1, setCurrentIndex1] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex1((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex1(index);
  };

  const slides = [
    aboutUs,
    'https://via.placeholder.com/300x200?text=Image+5',
    'https://via.placeholder.com/300x200?text=Image+6',
    'https://via.placeholder.com/300x200?text=Image+7',
  ];


  const images = [
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    image3,
    'https://via.placeholder.com/300x200?text=Image+4',
    'https://via.placeholder.com/300x200?text=Image+5',
    'https://via.placeholder.com/300x200?text=Image+6',
    'https://via.placeholder.com/300x200?text=Image+7',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animClass, setAnimClass] = useState('');

  const nextImage = () => {
    setAnimClass('slide-out-left');
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 5));
    setTimeout(() => setAnimClass('slide-in-right'), 50);
  };

  const prevImage = () => {
    setAnimClass('slide-out-right');
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setTimeout(() => setAnimClass('slide-in-left'), 50);
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 5);



  const sectionStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px', // Set a fixed height (adjust as needed)
    width: '100%',
  };

  return (
    <section  className=" overflow-auto">  

        <div className="container mx-auto h-[100vh] mb-10 flex items-center justify-center" >

          <div className="flex flex-col justify-center h-screen w-[85%] mt-10 items-center">

            <div className="h-[20%] w-full flex flex-col">
                <div className="-500 h-[40%] w-full flex items-end justify-center mb-5">
                  <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold">
                  Paanakan sa Mandaue
                    </p>
                </div>
                <div className=" h-[60%] w-full">

                  <div className="h-[50%] w-full flex justify-center items-start">
                      <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                  
                  </div>

                </div>
            </div>

            <div className=" h-[70%] w-[85%] flex justify-center items-center flex-col md:flex-row mt-5 rounded-[20px] -z-50" >

                      <div className="relative w-full h-full rounded-[20px]  overflow-hidden ">
                          <div
                              className="flex transition-transform duration-500"
                              style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
                          >
                              {slides.map((slide, index) => (
                                  <div className="min-w-full" key={index}>
                                      <img src={slide} alt={`Slide ${index + 1}`} className="h-full w-full object-covers" />
                                  </div>
                              ))}
                          </div>
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {slides.map((_, index) => (
                                  <div
                                      key={index}
                                      className={`w-5 h-[9px] rounded-full cursor-pointer ${currentIndex1 === index ? 'bg-[#F0142F]' : 'bg-[#FFFFFF]'}`}
                                      onClick={() => handleIndicatorClick(index)}
                                  />
                              ))}
                          </div>
                      </div>

              </div>
      
          </div>

        </div>



        <div className="container mx-auto h-screen w-full s flex items-center justify-center  border-black flex-wrap mb-3" style={sectionStyle}>

          <div className="flex flex-row justify-evenly items-center h-full w-[75%] flex-wrap  border-red-500 overflow-auto">

            <div className="bg-[#FECAD5] w-[47%] h-[47%] rounded-[10px] rounded-bl-[20px] flex flex-col justify-center items-center"> 

                <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold ">
                Our Vision
                </p> 

                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 p-8 mt-1 break-words">
                A responsive, well-equipped birthing and family planning clinic guided by a highly principled personnel, adapting health strategies, supported by strong commitment for the upliftment of the Reproductive Health of Women and the Welfare Of Newborns in the Province of Cebu.</p>

            </div>
      
            <div className="bg-[#FECAD5] w-[47%] h-[47%] rounded-[10px] rounded-br-[20px] flex flex-col justify-center items-center text-clip"> 
                <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold justify-self-start">
                Our Mission
                </p> 

                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 p-8 mt-1 break-words text-clip">
                To ensure, to provide, to deliver the highest standard of quality health services to all especially the undeserved. To ensure the spiritual, moral, social health needs of an individual are met.</p>

            </div>
            
            <div className="bg-[#FECAD5] w-[47%] h-[47%] rounded-[10px] rounded-tl-[20px] flex flex-col justify-center items-center"> 
                <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold ">
                Our Vision
                </p> 

                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 p-8 mt-1 break-words text-clip">
                A responsive, well-equipped birthing and family planning clinic guided by a highly principled personnel, adapting health strategies, supported by strong commitment for the upliftment of the Reproductive Health of Women and the Welfare Of Newborns in the Province of Cebu.</p>

            </div>
            <div className="bg-[#FECAD5] w-[47%] h-[47%] rounded-[10px] rounded-tr-[20px] flex flex-col justify-center items-center"> 
                <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold ">
                Our Mission
                </p> 

                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 p-8 mt-1 break-words text-clip">
                To ensure, to provide, to deliver the highest standard of quality health services to all especially the undeserved. To ensure the spiritual, moral, social health needs of an individual are met.</p>

            </div>
          </div>

        </div>


        <div className="container mx-auto h-auto  flex items-center justify-center" >

          <div className="flex flex-col justify-center h-[554px] w-[1125px] mt-[5rem] ">



                  <img src={processFlow} className="h-full w-full" />                             
     
      

          </div>

        </div>


        <div className="container mx-auto h-screen mb-5 flex items-center justify-center" >

          <div className="flex flex-col justify-center h-screen w-[95%] mt-10 ">
            <div className="h-[10%] w-full flex flex-col mb-5">

                  <div className="-500 h-[25%] w-full flex items-end justify-center mb-2">
                  <p className="text-[11px] md:text-[14px] lg:text-[18px] montserrat font-medium text-center leading-5 text-[#353535]">
                  Meet Our Amazing Team </p>
                  </div>

                  <div className="-500 h-[50%] w-full flex items-end justify-center mb-3">
                    <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold ">
                      The Faces Behind Our Success
                      </p>
                  </div>
 
                  <div className="-500 h-[25%] w-full flex items-end justify-center mb-5">
                      <p className="text-[11px] md:text-[14px] lg:text-[18px] montserrat font-medium text-center leading-5 text-[#353535]">
                      We Could’nt Do It Without Them </p>
                  </div>

            </div>
            <div className=" h-[70%] w-full flex justify-center items-center flex-col md:flex-row mt-5  border-black " >

              <div className="h-full w-full  border-red-900 flex flex-row justify-center items-center overflow-y-auto overflow-x-hidden flex-wrap scrollbar-thin gap-6 scrollbar-[#FF456E]">

                    <div className="card h-[210px] w-[200px] max-w-sm  border border-[#DCE0E0] rounded-t-[10px] rounded-b-[30px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                          <div className="h-2/3 w-full  border-black ">
                              <img src={midWife} className="h-full w-full" />
                          </div>
                          <div className="h-1/3 w-full  border-black  text-center">
                              <p className="font-varela text-[#FF3864]" >Elsie Basubas </p>
                              <p className="montserrat text-[#353535]">Midwife </p>
                          </div>
                    </div>

                    <div className="card h-[210px] w-[200px] max-w-sm  border border-[#DCE0E0] rounded-t-[10px] rounded-b-[30px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                          <div className="h-2/3 w-full  border-black ">
                              <img src={midWife} className="h-full w-full" />
                          </div>
                          <div className="h-1/3 w-full  border-black  text-center">
                              <p className="font-varela text-[#FF3864]" >Elsie Basubas </p>
                              <p className="montserrat text-[#353535]">Midwife </p>
                          </div>
                    </div>
                    <div className="card h-[210px] w-[200px] max-w-sm  border border-[#DCE0E0] rounded-t-[10px] rounded-b-[30px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                          <div className="h-2/3 w-full  border-black ">
                              <img src={midWife} className="h-full w-full" />
                          </div>
                          <div className="h-1/3 w-full  border-black  text-center">
                              <p className="font-varela text-[#FF3864]" >Elsie Basubas </p>
                              <p className="montserrat text-[#353535]">Midwife </p>
                          </div>
                    </div>
                    <div className="card h-[210px] w-[200px] max-w-sm  border border-[#DCE0E0] rounded-t-[10px] rounded-b-[30px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                          <div className="h-2/3 w-full  border-black ">
                              <img src={midWife} className="h-full w-full" />
                          </div>
                          <div className="h-1/3 w-full  border-black  text-center">
                              <p className="font-varela text-[#FF3864]" >Elsie Basubas </p>
                              <p className="montserrat text-[#353535]">Midwife </p>
                          </div>
                    </div>
                    <div className="card h-[210px] w-[200px] max-w-sm  border border-[#DCE0E0] rounded-t-[10px] rounded-b-[30px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                          <div className="h-2/3 w-full  border-black ">
                              <img src={midWife} className="h-full w-full" />
                          </div>
                          <div className="h-1/3 w-full  border-black  text-center">
                              <p className="font-varela text-[#FF3864]" >Elsie Basubas </p>
                              <p className="montserrat text-[#353535]">Midwife </p>
                          </div>
                    </div>
                    <div className="card h-[210px] w-[200px] max-w-sm  border border-[#DCE0E0] rounded-t-[10px] rounded-b-[30px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                          <div className="h-2/3 w-full  border-black ">
                              <img src={midWife} className="h-full w-full" />
                          </div>
                          <div className="h-1/3 w-full  border-black  text-center">
                              <p className="font-varela text-[#FF3864]" >Elsie Basubas </p>
                              <p className="montserrat text-[#353535]">Midwife </p>
                          </div>
                    </div>
                    <div className="card h-[210px] w-[200px] max-w-sm  border border-[#DCE0E0] rounded-t-[10px] rounded-b-[30px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                          <div className="h-2/3 w-full  border-black ">
                              <img src={midWife} className="h-full w-full" />
                          </div>
                          <div className="h-1/3 w-full  border-black  text-center">
                              <p className="font-varela text-[#FF3864]" >Elsie Basubas </p>
                              <p className="montserrat text-[#353535]">Midwife </p>
                          </div>
                    </div>
                    <div className="card h-[210px] w-[200px] max-w-sm  border border-[#DCE0E0] rounded-t-[10px] rounded-b-[30px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                          <div className="h-2/3 w-full  border-black ">
                              <img src={midWife} className="h-full w-full" />
                          </div>
                          <div className="h-1/3 w-full  border-black  text-center">
                              <p className="font-varela text-[#FF3864]" >Elsie Basubas </p>
                              <p className="montserrat text-[#353535]">Midwife </p>
                          </div>
                    </div>
                    <div className="card h-[210px] w-[200px] max-w-sm  border border-[#DCE0E0] rounded-t-[10px] rounded-b-[30px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                          <div className="h-2/3 w-full  border-black ">
                              <img src={midWife} className="h-full w-full" />
                          </div>
                          <div className="h-1/3 w-full  border-black  text-center">
                              <p className="font-varela text-[#FF3864]" >Elsie Basubas </p>
                              <p className="montserrat text-[#353535]">Midwife </p>
                          </div>
                    </div>


              </div>

            </div>
      
          </div>

        </div>


        <div className="container mx-auto h-[30vh] mb-10 flex items-center justify-center " >

          <div className="flex flex-col justify-center h-full w-[95%] mt-10 ">
            
              <div className="h-1/4 flex justify-center items-center">

                  <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold ">
                  Accreditation and Certification
                    </p>
            
              </div>

              <div className="h-3/4 border-black flex justify-center items-center">

                    <div className="h-full w-[8%] border-black flex justify-center items-center">
                      <button onClick={prevImage} disabled={currentIndex === 0}>
                        <FontAwesomeIcon icon={faAngleLeft} className='icon-outline text-[40px] my-1 text-[#FF456E] hover:text-[#FC7995]' />
                      </button>
                    </div>

                    <div className={`h-full w-[84%] border-black flex justify-evenly items-center aboutUsDiv ${animClass}`}>
                      {visibleImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Carousel Image ${currentIndex + index + 1}`}
                          style={{ width: '165px', height: '136px', margin: '0 5px' }}
                        />
                      ))}
                    </div>

                    <div className="h-full w-[8%] border-black flex justify-center items-center">
                      <button onClick={nextImage} disabled={currentIndex + 5 >= images.length}>
                        <FontAwesomeIcon icon={faAngleRight} className='text-[40px] my-1 text-[#FF456E] hover:text-[#FC7995]' />
                      </button>
                    </div>

              </div>
      
          </div>

        </div>

      <Footer/>
    </section>
  )
}

export default AboutUs