import Footer from "@/layout/Footer/Footer";
import back from "../assets/images/visionMission2.png";

function AboutUs() {

  const sectionStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px', // Set a fixed height (adjust as needed)
    width: '100%',
};

  return (
    <section  className=" overflow-auto">  
        <div className="container mx-auto h-[100vh] mb-5 flex items-center justify-center" >

          <div className="flex flex-col justify-center h-screen w-[75%] mt-10 ">
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
            <div className=" h-[70%] w-full flex justify-center items-center flex-col md:flex-row mt-5" style={{ boxShadow: "0px -3px 36px 0px rgba(0, 0, 0, 0.25)" }}>

            <div className="hidden md:flex h-full w-[50%] flex-col justify-start items-center">

                <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold mt-[8rem]">
                      OUR LOCATION
                </p>
                <p className="text-[6px] md:text-[11px] lg:text-[16px] montserrat font-medium text-center pt-4">
                Lopez Jaena St, Tipolo, Mandaue <br />City, 6014 Cebu 
                </p>

              </div>

              <div className=" h-full w-[70%]">

                <div style={{ height:"100%", width:"100%"}}><iframe  style={{height:"100%", width:"100%"}}  frameBorder="0" scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Lopez%20Jaena%20St,%20Tipolo,%20Mandaue%20City,%206014%20Cebu+(Paanakan%20Sa%20Mandaue)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
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
      <Footer/>
    </section>
  )
}

export default AboutUs