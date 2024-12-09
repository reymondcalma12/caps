

import { Button } from "@/components/ui/button";
import Img from "../assets/images/newHomeMainPic.png";
import TwoInOne from "../assets/images/TwoInOne.png";
import philhealth from "../assets/images/PhilHealthLogo.png";
import back from "../assets/images/landingBack4.png";
import mess from "../assets/images/mess.png";

import faqs from "../assets/images/faqs.png";

import article1 from "../assets/images/article1.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";

import meetTheTeam from "../assets/images/meetTheTeam.png";

import charlot from "../assets/images/charlot.png";
import checkBaby from "../assets/images/checkBaby.png";

import outside from "../assets/images/paanakanOutside.png";

import baby from "../assets/images/ourServicesBabies.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'



import { Clock } from "lucide-react";
import Footer from "@/layout/Footer/Footer";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

function Home() {

  const sectionStyle = {
    backgroundImage: `url(${back})`, // Replace with your image path
    backgroundSize: 'cover', // This makes the image cover the entire section
    backgroundPosition: 'center',
    height: 'auto', // You can set the height explicitly
    width: 'auto',
  };



  return (
    <section  className=" overflow-auto">
      <div className="container mx-auto h-auto" style={sectionStyle}>
        <div className="flex flex-col xl:flex-row items-center justify-center h-[528px]">
          <div className="xl:w-[60%] xl:text-left text-center mt-[5rem]">
    
            <h1 className="h1 ">Paanakan Sa Mandaue</h1>
            <h4 className="h4 montserrat mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight:'500', color:'#353535' }}>— Your Trusted Partner in Maternity Care</h4>
            <a href="/about-us" className="montserrat">
              <Button className="rounded-full px-[50px] py-2 mb-5">About Us</Button>
            </a>
            <img src={philhealth} alt="" style={{width:'280px'}} />
          </div>
          <div className="hidden lg:flex max-w-[614px] self-end">
            <img src={Img} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="container  h-[350px] w-full   flex flex-row p-0">
        <div className="flex flex-col xl:flex-row items-center justify-center h-full w-[43%]  ">
          <div className=" h-[60%] w-full flex items-center flex-col justify-center mt-5">
              <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold mb-3">
              A Look Inside Paanakan sa Mandaue
                    </p>
                    <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#666666] mb-3">
                    "Take a peek inside our cozy rooms, meet our caring team,<br /> and see the facilities designed with you and your newborn’s <br /> comfort in mind." </p>
                  <a href="/gallery" className="montserrat me-[5rem] py-1 mb-5 self-end">
                  <Button className="rounded-full px-[10px] ">View Full Gallery</Button>
                  </a>

          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly h-full w-[52%]  border-black">
            <div className="h-[243px] w-[183px] rounded-[10px] mt-6 flex items-center justify-center bg-[#FDAABC]">
               <img src={TwoInOne} alt="" style={{width:'auto', height:'auto'}} />
            </div>
            <div className="h-[243px] w-[183px]  rounded-[10px] mb-6 flex items-center justify-center bg-[#FDAABC]">
                <img src={TwoInOne} alt="" style={{width:'auto', height:'auto'}} />
            </div>
            <div className="h-[243px] w-[183px]  rounded-[10px] mt-6 flex items-center justify-center bg-[#FDAABC]">
                <img src={TwoInOne} alt="" style={{width:'auto', height:'auto'}} />
            </div>
        </div>
        <div className="flex flex-col xl:flex-row items-end justify-center h-full w-[5%]  border-black">
            <img src={mess} alt="" className="mb-[5rem]" style={{width:'auto', height:'auto'}} />    
        </div>
      </div>

      <div className="container  h-[450px] w-full   border-black  flex flex-col justify-start items-center p-0 mb-5">
          <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold mb-3">Our Services</p>
          <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#666666] mb-3">
          Comprehensive care for every stage of your journey, from pregnancy to postpartum support, and <br /> newborn care, provided with compassion and expertise 
          </p>

          <div className="h-3/4 w-full  border-black flex flex-row justify-evenly items-center">
                <div className="card h-[256px] w-[231px] max-w-sm  border border-[#DCE0E0] rounded-[10px] rounded-bl-[50px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                              <div className="h-[45%] w-full  border-black flex items-end justify-center">
                                  <img src={baby} className="h-[86%] w-[85%]" />
                              </div>
                              <div className="h-1/3 w-full  border-black flex flex-col justify-start items-start leading-5">
                                  <p className="font-varela text-[#FF3864] font-bold ml-5 mt-1 mb-1"  >Delivery </p>
                                  <p className="montserrat text-[#353535] self-center text-[10px] mx-5 leading-[1rem]">
                                    Experience a safe, comfortable delivery surrounded by compassionate care, focused entirely on you and your newborn’s needs. </p>
                              </div>
                              <div className="h-[21%] w-full  border-black flex items-center justify-end">
                                  <a href="/gallery" className="montserrat   me-5">
                                    <Button className="rounded-full px-[30px] h-[20px]">Explore</Button>
                                  </a>
                              </div>
                </div>
                <div className="card h-[256px] w-[231px] max-w-sm  border border-[#DCE0E0] rounded-[10px] rounded-bl-[50px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                              <div className="h-[45%] w-full  border-black flex items-end justify-center">
                                  <img src={baby} className="h-[86%] w-[85%]" />
                              </div>
                              <div className="h-1/3 w-full  border-black flex flex-col justify-start items-start leading-5">
                                  <p className="font-varela text-[#FF3864] font-bold ml-5 mt-1 mb-1"  >Prenatal/Postnatal Care  </p>
                                  <p className="montserrat text-[#353535] self-center text-[10px] mx-5 leading-[1rem]">
                                  Support for every step of your journey, from nurturing your pregnancy to providing expert guidance after birth.</p>
                              </div>
                              <div className="h-[21%] w-full  border-black flex items-center justify-end">
                                  <a href="/gallery" className="montserrat   me-5">
                                    <Button className="rounded-full px-[30px] h-[20px]">Explore</Button>
                                  </a>
                              </div>
                </div>
                <div className="card h-[256px] w-[231px] max-w-sm  border border-[#DCE0E0] rounded-[10px] rounded-bl-[50px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                              <div className="h-[45%] w-full  border-black flex items-end justify-center">
                                  <img src={baby} className="h-[86%] w-[85%]" />
                              </div>
                              <div className="h-1/3 w-full  border-black flex flex-col justify-start items-start leading-5">
                                  <p className="font-varela text-[#FF3864] font-bold ml-5 mt-1 mb-1"  >Immunization </p>
                                  <p className="montserrat text-[#353535] self-center text-[10px] mx-5 leading-[1rem]">
                                  Protect your child’s health with essential vaccines delivered in a caring, family-friendly environment</p>
                              </div>
                              <div className="h-[21%] w-full  border-black flex items-center justify-end">
                                  <a href="/gallery" className="montserrat   me-5">
                                    <Button className="rounded-full px-[30px] h-[20px]">Explore</Button>
                                  </a>
                              </div>
                </div>
                <div className="card h-[256px] w-[231px] max-w-sm  border border-[#DCE0E0] rounded-[10px] rounded-bl-[50px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                              <div className="h-[45%] w-full  border-black flex items-end justify-center">
                                  <img src={baby} className="h-[86%] w-[85%]" />
                              </div>
                              <div className="h-1/3 w-full  border-black flex flex-col justify-start items-start leading-5">
                                  <p className="font-varela text-[#FF3864] font-bold ml-5 mt-1 mb-1"  >Newborn Screening </p>
                                  <p className="montserrat text-[#353535] self-center text-[10px] mx-5 leading-[1rem]">
                                  Ensure your baby’s healthy start with early screenings designed to identify and prevent potential health issues</p>
                              </div>
                              <div className="h-[21%] w-full  border-black flex items-center justify-end">
                                  <a href="/gallery" className="montserrat   me-5">
                                    <Button className="rounded-full px-[30px] h-[20px]">Explore</Button>
                                  </a>
                              </div>
                </div>
          </div>
          <div className="h-[10%] w-full  border-black flex flex-row justify-end items-center">
                  <a href="/gallery" className="montserrat me-20 self-end">
                      <Button className="rounded-[10px] px-[5px] ">Learn More About Our Services</Button>
                  </a>
          </div>
      </div>
      <div className="container bg-[#FECAD5] h-[355px] w-full   border-black  flex flex-row justify-center items-center p-0 mb-5">
          <div className="h-full w-[40%]  border-red-600 flex justify-end items-center ">
              <div className="h-[284px] w-[288px]  bg-[#f0b7ca] border-black ms-20 rounded-[10px] relative mt-4 ">

                <div className="h-[284px] w-[288px]  bg-[#FC7995] border-black ms-20 rounded-[10px] absolute bottom-5 right-5 flex justify-center items-center">
                    <div className="h-[228px] w-[231px]   border-black rounded-[10px] ">
                        <img src={charlot} className="h-full w-full" />
                    </div>
                </div>

              </div>
          </div>
          <div className="h-full w-[60%]  border-black flex flex-col justify-center items-center">

            <div className="h-1/4 w-full  border-black flex justify-center items-center">
                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#353535] mb-3">
                    “The staff of the Paanakan sa Mandaue is very approachable and <br /> humble. Slamat kaayo mga maam.” 
                </p>
            </div>
            <div className="h-1/4 w-full  border-black">
                <div className="h-1/2 w-full  border-black">
                    <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#353535] mb-3">
                      —Charloote Anore
                    </p>
                </div>
                <div className="h-1/2 w-full  border-black">
                    <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#353535] mb-3">
                      {/* auto next  */}
                    </p>
                </div>
 
            </div>
 
          </div>
      </div>


      <div className="container  h-[480px] w-full   border-black  flex flex-col justify-start items-center p-0 mb-5 mt-10">
          <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold mb-3">Articles and Books</p>
          <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#666666] mb-3">
              Discover helpful articles and trusted resources on pregnancy, parenting, and newborn care to support you every step of the way.
          </p>

          <div className="h-[100%] w-full  border-black flex flex-row justify-evenly items-center">
              <div className="h-full w-1/2  border-red-600 flex flex-row justify-end items-center">
              
                  <div className="h-[350px] w-[370px]  rounded-[10px] border-red-600 flex flex-col justify-evenly items-center me-2">
                      <div className="h-[75%] w-full   border-black">
                             <img src={checkBaby} className="h-full w-full" />
                      </div>
                      <div className="h-[25%] w-full rounded-b-[10px]  border-black bg-[#FEE2E8] ">
                          <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-5 text-[#666666] me-[3.7rem] mt-2 mb-2">
                                  What to Expect During Each Trimester
                          </p>
                          <div className="h-[40%] w-full   border-black flex items-center justify-between">
                              <p className="text-[6px] md:text-[8px] lg:text-[10px]  montserrat font-medium text-center leading-5 text-[#666666] ms-2 mb-1">
                                   06/20/2023
                              </p>
                              <a href="/gallery" className="montserrat mb-1  me-5">
                                    <Button className="rounded-full px-[30px] h-[20px]">Read more</Button>
                              </a>
                          </div>
                      </div>
                  </div>

              </div>
                <div className="h-full w-1/2  border-black flex flex-col justify-evenly items-start">

                    <div className="h-[103px] w-[370px] rounded-[10px] bg-[#FEE2E8] border-red-600 flex flex-row justify-evenly items-center ms-2">
                        <div className="h-full w-[55%] rounded-l-[10px]  border-black">
                              <img src={article1} className="h-full w-full" />
                        </div>
                        <div className="h-full w-[45%]  rounded-r-[10px] border-black bg-[#FEE2E8] ">
                            <p className="text-[8px] md:text-[12px] lg:text-[13px] montserrat font-medium text-center leading-5 text-[#666666]  mt-2 mb-5">
                            Nutrition and Exercise for a Healthy Pregnancy
                            </p>
                            <div className="h-[20%] w-full   border-black flex items-center justify-between">
                                <p className="text-[6px] md:text-[8px] lg:text-[10px]  montserrat font-medium text-center leading-5 text-[#666666] ms-2 mb-1">
                                    06/20/2023
                                </p>
                                <a href="/gallery" className="montserrat mb-1  me-2">
                                      <Button className="rounded-full px-[10px] h-[20px] text-[9px]">Read more</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    

                    <div className="h-[103px] w-[370px] rounded-[10px] bg-[#FEE2E8] border-red-600 flex flex-row justify-evenly items-center ms-2">
                        <div className="h-full w-[55%] rounded-l-[10px]  border-black">
                              <img src={article2} className="h-full w-full" />
                        </div>
                        <div className="h-full w-[45%]  rounded-r-[10px] border-black bg-[#FEE2E8] ">
                            <p className="text-[8px] md:text-[12px] lg:text-[15px] montserrat font-medium text-center leading-5 text-[#666666]  mt-2 mb-5">
                            Post-Partum Recovery Timeline
                            </p>
                            <div className="h-[20%] w-full   border-black flex items-center justify-between">
                                <p className="text-[6px] md:text-[8px] lg:text-[10px]  montserrat font-medium text-center leading-5 text-[#666666] ms-2 mb-1">
                                    06/20/2023
                                </p>
                                <a href="/gallery" className="montserrat mb-1  me-2">
                                      <Button className="rounded-full px-[10px] h-[20px] text-[9px]">Read more</Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="h-[103px] w-[370px] rounded-[10px] bg-[#FEE2E8] border-red-600 flex flex-row justify-evenly items-center ms-2">
                        <div className="h-full w-[55%] rounded-l-[10px]  border-black">
                              <img src={article3} className="h-full w-full" />
                        </div>
                        <div className="h-full w-[45%]  rounded-r-[10px] border-black  ">
                            <p className="text-[8px] md:text-[12px] lg:text-[14px] montserrat font-medium text-center leading-5 text-[#666666]  mt-2 mb-5">
                                 Nutritional Needs During Pregnancy
                            </p>
                            <div className="h-[20%] w-full   border-black flex items-center justify-between">
                                <p className="text-[6px] md:text-[8px] lg:text-[10px]  montserrat font-medium text-center leading-5 text-[#666666] ms-2 mb-1">
                                    06/20/2023
                                </p>
                                <a href="/gallery" className="montserrat mb-3  me-2">
                                      <Button className="rounded-full px-[10px] h-[20px] text-[9px]">Read more</Button>
                                </a>
                            </div>
                        </div>
                    </div>

              </div>
          </div>

      </div>

      <div className="container  h-[390px] w-full   border-black  flex  justify-center items-center p-0 mb-5 mt-10">
          <div className="h-[323px] w-[90%]   border-black rounded-[50px] bg-[#FECAD5] flex flex-row">

            <div className="h-[323px] w-[55%]  border-black flex items-center justify-end">

                <div className="h-[264px] w-[500px] rounded-[10px]  border-black bg-[#FC7995] relative mt-2">
                    <div className="h-[264px] w-[500px] rounded-[10px]  border-black  absolute left-2 bottom-2">
                          <img src={meetTheTeam} className="h-full w-full" />
                    </div>
                </div>

            </div>
            <div className="h-[323px] w-[45%]  border-black flex flex-col justify-center items-center">

                <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold mb-2 mr-[5rem]">Meet Our Team</p>
                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#000000] mb-7 mr-[5rem]">
                    The Faces Behind our Success
                </p>

                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#353535] mb-5 mr-[5rem]">
                    Our skilled team is here to support you <br /> every step of the way.
                </p>
                <a href="/about-us" className="montserrat mr-[5rem]">
                  <Button className="rounded-full px-[50px] py-2 mb-5">Learn More About Us</Button>
                </a>

            </div>
          </div>
      </div>
      <div className="container  h-[424px] w-full   border-black  flex  justify-center items-center p-0 mb-5 mt-10">
            <div className="h-full w-[58%]   border-black relative">

            <Button className="rounded-full px-[20px] h-[30px] ms-[4rem]"><FontAwesomeIcon icon={faLightbulb}/> &nbsp; FAQS</Button>

                <div className="max-w-lg mx-auto my-8 mr-10">
                <h2 className="text-2xl font-bold mb-4">How can we help you?</h2>

                <details className="border-t py-4">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-[]">
                    Where are you located?
                    <span className="transform transition-transform duration-200">&#9662;</span>
                  </summary>
                  <p className="mt-2 text-gray-600">We are located in [Insert Location].</p>
                </details>

                <details className="border-t py-4">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-medium">
                    What services do you offer?
                    <span className="transform transition-transform duration-200">&#9662;</span>
                  </summary>
                  <p className="mt-2 text-gray-600">We offer a range of services including...</p>
                </details>

                <details className="border-t py-4">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-medium">
                    Paanakan sa Mandaue Schedules?
                    <span className="transform transition-transform duration-200">&#9662;</span>
                  </summary>
                  <p className="mt-2 text-gray-600">Schedules are available on...</p>
                </details>

                <details className="border-t py-4">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-medium">
                    What type of support is available after my baby is born?
                    <span className="transform transition-transform duration-200">&#9662;</span>
                  </summary>
                  <p className="mt-2 text-gray-600">We provide postnatal support such as...</p>
                </details>

                <details className="border-t py-4 border-b">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-medium">
                    What should I bring to the birth center for delivery?
                    <span className="transform transition-transform duration-200">&#9662;</span>
                  </summary>
                  <p className="mt-2 text-gray-600">You should bring the following items...</p>
                </details>
                </div>

            </div>
            <div className="h-full w-[42%]   border-red-600 "> 
                <div className="h-full w-[92%]   border-red-600 "> 
                        <img src={faqs} className="h-full w-full" />
                </div>
            </div>
      </div>
      <div className="container  h-[350px] w-full   border-black  flex  flex-row justify-center items-center p-0 mb-5 mt-10">

          <div className=" h-full w-[55%]   border-black flex justify-end items-center pr-10 " >
                <div className="h-[90%] w-[90%] rounded-[10px]  border-black"> 
                      <div className="h-full rounded-[10px] w-full">
                          <iframe  className="rounded-[10px] border-2 border-[#F0142F]" style={{height:"100%", width:"100%"}}  frameBorder="0" scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lopez%20Jaena%20St,%20Tipolo,%20Mandaue%20City,%206014%20Cebu+(Paanakan%20Sa%20Mandaue)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/">gps vehicle tracker</a>
                          </iframe>
                      </div>
                </div>
          </div>
          <div className=" h-full w-[45%]   border-black ">

              <div className="h-full w-[95%]  rounded-[10px] border-black bg-[#FECAD5]">
                  <div className="h-[65%] w-full   border-black flex justify-center items-end">
                        <div className="h-[85%] w-[80%]   border-black">
                            <img src={outside} className="h-full w-full" />
                        </div>
                  </div>
                  <div className="h-[35%] w-full   border-black flex flex-row">
                        <div className="h-full w-[65%]   border-black flex justify-center items-center">
                            <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center  text-[#353535] mb-2">
                                Lopez Jaena St., Tipolo, Mandaue City <br /> Landmark: Skywalk Tipolo/Tipolo Barangay
                            </p>
                        </div>
                        <div className="h-full w-[35%]   border-black flex items-center">
                            <Button className="rounded-full px-[20px] h-[30px] ms-3 mb-8">Visit Us Now!</Button>
                        </div>
                  </div>
              </div>
          </div>

      </div>
      <Footer/>
    </section>
    
    
  );
}
export default Home;

