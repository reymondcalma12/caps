

import { Button } from "@/components/ui/button";
import Img from "../assets/images/newHomeMainPic.png";
import TwoInOne from "../assets/images/TwoInOne.png";
import philhealth from "../assets/images/PhilHealthLogo.png";
import back from "../assets/images/landingBack4.png";
import mess from "../assets/images/mess.png";
import midWife from "../assets/images/midwife.png";

import baby from "../assets/images/ourServicesBabies.png";



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

      <div className="container  h-[400px] w-full   border-black  flex flex-col justify-start items-center p-0">
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
                                  <p className="font-varela text-[#FF3864] font-bold ml-5 mt-1"  >Delivery </p>
                                  <p className="montserrat text-[#353535] self-center text-[12px] mx-5 leading-[1rem]">Experience a safe, comfortable delivery surrounded by compassionate care, focused entirely on you and your newborn’s needs. </p>
                              </div>
                </div>
                <div className="card h-[256px] w-[231px] max-w-sm  border border-[#DCE0E0] rounded-[10px] rounded-bl-[50px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                              <div className="h-[45%] w-full  border-black flex items-end justify-center">
                                  <img src={baby} className="h-[86%] w-[85%]" />
                              </div>
                              <div className="h-1/3 w-full  border-black flex flex-col justify-start items-start leading-5">
                                  <p className="font-varela text-[#FF3864] font-bold ml-5 mt-1"  >Delivery </p>
                                  <p className="montserrat text-[#353535] self-center text-[12px] mx-5 leading-[1rem]">Experience a safe, comfortable delivery surrounded by compassionate care, focused entirely on you and your newborn’s needs. </p>
                              </div>
                </div>
                <div className="card h-[256px] w-[231px] max-w-sm  border border-[#DCE0E0] rounded-[10px] rounded-bl-[50px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                              <div className="h-[45%] w-full  border-black flex items-end justify-center">
                                  <img src={baby} className="h-[86%] w-[85%]" />
                              </div>
                              <div className="h-1/3 w-full  border-black flex flex-col justify-start items-start leading-5">
                                  <p className="font-varela text-[#FF3864] font-bold ml-5 mt-1"  >Delivery </p>
                                  <p className="montserrat text-[#353535] self-center text-[12px] mx-5 leading-[1rem]">Experience a safe, comfortable delivery surrounded by compassionate care, focused entirely on you and your newborn’s needs. </p>
                              </div>
                </div>
                <div className="card h-[256px] w-[231px] max-w-sm  border border-[#DCE0E0] rounded-[10px] rounded-bl-[50px]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                              <div className="h-[45%] w-full  border-black flex items-end justify-center">
                                  <img src={baby} className="h-[86%] w-[85%]" />
                              </div>
                              <div className="h-1/3 w-full  border-black flex flex-col justify-start items-start leading-5">
                                  <p className="font-varela text-[#FF3864] font-bold ml-5 mt-1"  >Delivery </p>
                                  <p className="montserrat text-[#353535] self-center text-[12px] mx-5 leading-[1rem]">Experience a safe, comfortable delivery surrounded by compassionate care, focused entirely on you and your newborn’s needs. </p>
                              </div>
                </div>
          </div>

      </div>
      <Footer/>
    </section>
    
    
  );
}
export default Home;

// import { Button } from "@/components/ui/button";
// import heroImg from "../assets/images/hero-img.png";

// function Home() {
//   return (
//     <div className="container mx-auto h-full bg-grey">
//       <div className="flex flex-col xl:flex-row items-center justify-between h-full">
//         <div className="xl:text-left text-center">
//           <h1 className="h1 mb-4">Paanakan Sa Mandaue</h1>
//           <p className="text-text">
//             Where Every Birth is a Celebration Of Life!
//           </p>
//           <Button className="rounded-full px-6 py-2">
//             <a href="/about-us">About Us</a>
//           </Button>
//         </div>
//         <div className="hidden lg:flex max-w-[814px] self-end">
//           <img src={heroImg} alt="" className="" />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Home;
