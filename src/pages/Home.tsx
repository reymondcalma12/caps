

import { Button } from "@/components/ui/button";
import Img from "../assets/images/hero-img.png";
import philhealth from "../assets/images/PhilHealthLogo.png";
import back from "../assets/images/landingBack4.png";
import { Clock } from "lucide-react";
import Footer from "@/layout/Footer/Footer";

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
      <div className="container  h-[350px] w-full border border-black flex flex-row p-0" >
        <div className="flex flex-col xl:flex-row items-center justify-center h-full w-[40%] border border-black">

        </div>
        <div className="flex flex-row items-center justify-evenly h-full w-[52%] border border-black">
            <div className="h-[243px] w-[183px] border border-black rounded">

            </div>
            <div className="h-[243px] w-[183px] border border-black">

            </div>
            <div className="h-[243px] w-[183px] border border-black">

            </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center h-full w-[8%] border border-black">

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
