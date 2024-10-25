import { Button } from "@/components/ui/button";
import Footer from "@/layout/Footer/Footer";

function Locations() {

  return (
    <section  className=" overflow-auto">
      
    <div className="container mx-auto h-[100vh] mb-5 flex items-center justify-center" >

      <div className="flex flex-col justify-center h-screen w-[75%] mt-10 ">
        <div className="h-[20%] w-full flex flex-col">
            <div className="-500 h-[40%] w-full flex items-end justify-center">
               <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold">
                Location
                </p>
            </div>
            <div className=" h-[60%] w-full">
              <div className=" h-[50%] w-full flex justify-center items-end">

                <p className="text-[15px] md:text-[18px] lg:text-[20px] font-roboto font-semibold">
                    Where you will find our Center </p>

              </div>
              <div className="h-[50%] w-full flex justify-center items-start">
                  <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center">
                  See the map and visualize your path to a serene birthing experience </p>
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

    <div className="container mx-auto h-[75vh]  flex items-center justify-center" style={{ background:'none'}}>
      
      <div className="flex flex-col justify-center items-center h-full w-[80%]  border-black  md:flex-row">

          <div className=" max-md:hidden h-full w-3/6  flex-col  border-black flex justify-center items-center">
            <div className="h-2/5 w-full bg-[#FDD6DE] rounded-3xl flex justify-center items-center flex-col" >
              <a href="#textAreaMessage ">
                <p className="text-[20px] md:text-[25px] lg:text-[30px] font-roboto font-bold ">
                    Write us a message!
                </p>
              </a>
 
              <p className="text-[6px] md:text-[11px] lg:text-[16px] montserrat font-medium text-center pt-1">
              We value your feedback
              </p>
             <Button className="rounded-full px-[30px] montserrat h-8 mt-3" >Write Us!</Button>

            </div>
          </div>

          <div className=" h-full w-3/6 max-md:min-w-full flex justify-center items-center flex-col md:flex-row " >

            <form className="flex justify-center items-center flex-col bg-white  rounded-[10px] border border-[#CCCCCC] px-8 pt-6 pb-8  h-[80%] w-[95%]" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
              <input  className="mb-5  appearance-none border-b-2 border-[#FF456E] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name"/>
              <input  className="mb-5  appearance-none border-b-2 border-[#FF456E] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name"/>
              <input  className="mb-5  appearance-none border-b-2 border-[#FF456E] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
              <textarea name="" id="textAreaMessage" className="scrollbar-thin rounded-md mb-5 w-full border border-[#FF456E] leading-10 p-4 focus:outline-none text-gray-700" placeholder="Write us a message">
              </textarea>
              <Button className="rounded-1 px-[40px] montserrat self-end" type="submit">Send</Button>
            </form>

            </div>
    
        </div>
    </div>
    <Footer/>
  </section>
  
  );
}

export default Locations