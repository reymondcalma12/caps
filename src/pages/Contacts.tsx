import { Button } from "@/components/ui/button";
import Footer from "@/layout/Footer/Footer";
import Img from "../assets/images/contactUsWriteUs.png";

function Contacts() {

  return (
    <section  className=" overflow-auto">
      
    <div className="container mx-auto h-[100vh] mb-5 flex items-center justify-center w-full" style={{ background: 'linear-gradient(180deg, white 0%, white 45%,  #FECAD5 45%, #FECAD5 82%, white 82%, white 100%)' }} >

      <div className=" flex flex-col justify-center h-full w-[100%] mt-10 ">

        <div className="h-[20%] w-full flex flex-col">
            <div className="-500 h-[40%] w-full flex items-end justify-center">
               <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold">
                Contact Us
                </p>
            </div>
            <div className=" h-[60%] w-full">
              <div className=" h-[50%] w-full flex justify-center items-end">

                <p className="text-[15px] md:text-[18px] lg:text-[20px] font-roboto font-semibold">
                We Would Be Happy To Assist You </p>

              </div>
              <div className="h-[50%] w-full flex justify-center items-start">
                  <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center">
                  See the map and visualize your path to a serene birthing experience </p>
              </div>
            </div>
        </div>

        <div className=" h-[70%] w-full flex justify-start items-center flex-col md:flex-row mt-5  border-black"  >

            <div className=" h-full w-1/2 max-md:min-w-full flex justify-center items-center flex-col md:flex-row  border-black" >

              <form className="flex justify-center items-center flex-col bg-white ml-20 max-md:ml-0 max-md:w-full rounded-[10px] border border-[#CCCCCC] px-8 pt-6 pb-8  h-full 2xl:h-4/5 w-[73%]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                <input  className="mb-5  appearance-none border-b-2 border-[#FF456E] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name"/>
                <input  className="mb-5  appearance-none border-b-2 border-[#FF456E] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name"/>
                <input  className="mb-5  appearance-none border-b-2 border-[#FF456E] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
                <textarea name="" id="textAreaMessage" className="scrollbar-thin rounded-md mb-5 w-full border border-[#FF456E] leading-10 p-4 focus:outline-none text-gray-700" placeholder="Write us a message">
                </textarea>
                <Button className="rounded-1 px-[40px] montserrat self-end" type="submit">Send</Button>
              </form>

            </div>

            <div className=" h-full w-1/2 max-md:hidden flex justify-center items-center flex-col md:flex-row  border-black" >

              <div className=" h-full w-full flex justify-center mb-5 items-center flex-col  border-black" >

                  <p className="text-[15px] md:text-[18px] lg:text-[20px] font-roboto font-bold text-center">
                      We value your opinion! Your feedback helps us improve and <br /> provide a better experience for all our users.
                  </p>
              </div>

            </div>

        </div>
   
      </div>

    </div>

    <div className="container mx-auto h-[100vh] mb-5 flex items-center justify-center w-full 2xl:h-[70vh]"  >

      <div className=" flex flex-col justify-center h-full w-[100%] mt-10 ">

          <div className="h-[20%] w-full flex flex-col">
              <div className="-500 h-[40%] w-full flex items-end justify-center mb-4">
                <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold">
                Get in touch with us!
                  </p>
              </div>
              <div className=" h-[60%] w-full">
                <div className="h-[50%] w-full flex justify-center items-start">
                    <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-6">
                    Whichever way you choose to get in touch, we're here to provide the support and information you need. <br />
                    We look forward to hearing from you! </p>
                </div>
              </div>
          </div>

          <div className=" h-[70%] w-full flex justify-evenly items-center flex-row max-md:items-center max-md:flex-col mt-5  border-black 2xl:h-3/4"  >

          <div className="h-[75%] w-[30%] border border-[#DCE0E0] rounded-bl-[50px] rounded-[10px] max-md:w-1/2 flex justify-center items-center flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>

              <div className="h-1/2 w-4/5  " >
                    <img 
                        src={Img} 
                        alt="Description of the image" 
                        className="h-full w-full object-cover rounded-tr-[50px] rounded-[20px]" 
                    />
              </div>

              <div className=" border-black h-[30%] w-5/6 flex justify-evenly items-center flex-col ">

                  <p className="text-[25px] md:text-[28px] lg:text-[24px] font-roboto font-bold text-[#FF3864] ">
                      Call Now!
                  </p>
                  <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-6 text-[#353535]" >
                  0322685545 </p>

              </div>
              </div>

              <div className="h-[75%] w-[30%] border border-[#DCE0E0] rounded-bl-[50px] rounded-[10px] max-md:w-1/2 flex justify-center items-center flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>

                  <div className="h-1/2 w-4/5 ">
                        <img 
                            src={Img} 
                            alt="Description of the image" 
                            className="h-full w-full object-cover rounded-tr-[50px] rounded-[20px]" 
                        />
                  </div>
                  <div className=" border-black h-[30%] w-5/6 flex justify-end items-center flex-col ">

                      <p className="text-[25px] md:text-[28px] lg:text-[24px]  font-roboto font-bold text-[#FF3864] ">
                          We’re On The Map! 
                      </p>
                      <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-6 text-[#353535] mt-3" >
                      Lopez Jaena St, Tipolo, Mandaue <br /> City, 6014 Cebu </p>

                  </div>
              </div>

               <div className="h-[75%] w-[30%] border border-[#DCE0E0] rounded-bl-[50px] rounded-[10px] max-md:w-1/2 flex justify-center items-center flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>

                  <div className="h-1/2 w-4/5  " >
                        <img 
                            src={Img} 
                            alt="Description of the image" 
                            className="h-full w-full object-cover rounded-tr-[50px] rounded-[20px]" 
                        />
                  </div>

                  <div className=" border-black h-[30%] w-5/6 flex justify-evenly items-center flex-col ">

                      <p className="text-[25px] md:text-[28px] lg:text-[24px] font-roboto font-bold text-[#FF3864] ">
                          Write Us!
                      </p>
                      <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-6 text-[#353535]" >
                      lisa.prudenciado@yahoo.com </p>

                  </div>
              </div>

          </div>
   
      </div>

    </div>

    
    <Footer/>
  </section>
  
  )
}

export default Contacts