import { Button } from "@/components/ui/button";
import Footer from '@/layout/Footer/Footer';

import COC from "../../assets/images/famCOC.png";
import IUD from "../../assets/images/famIUD.png";
import Inject from "../../assets/images/famInjectable.png";
import Implant from "../../assets/images/famImplant.png";

import CONDOM from "../../assets/images/famCondom.png";
import POP from "../../assets/images/famPOP.png";
import Interval from "../../assets/images/famInterval.png";
import BBT from "../../assets/images/famBBT.png";

import POST from "../../assets/images/famPost-Partum.png";
import STM from "../../assets/images/famSTM.png";
import SDM from "../../assets/images/famSDM.png";
import LAM from "../../assets/images/famLAM.png";

function FamilyPlanning() {
  return (
    <section  className=" overflow-auto"> 
        <div className="container mx-auto h-[1500px] w-full mb-10 flex items-center justify-center" >

                <div className="flex flex-col justify-center h-full w-[85%] mt-10 items-center ">

                    <div className="h-[100px] w-full mt-10 mb-5 flex flex-col">
                        <div className="-500 h-[40%] w-full flex items-end justify-center mb-5">
                            <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold">
                                   Family Planning Methods
                            </p>
                        </div>
                        <div className=" h-[60%] w-full">

                            <div className="h-[50%] w-full flex justify-center items-start ">
                                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#666666] ">
                                        Discover safe, effective options for family planning at Paanakan sa Mandaue Birth Center. We offer personalized guidance on a range of methods to help you make informed choices that align with your health and lifestyle goals.
                                </p>               
                            </div>

                        </div>
                        
                    </div>

                    <div className=" h-[1300px] w-full  md:flex-row   border-black  flex flex-row justify-center items-center overflow-y-auto overflow-x-hidden flex-wrap scrollbar-thin gap-7 scrollbar-[#FF456E]" >

                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={COC} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold ">
                                                  Combined Oral Contraceptives
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                  The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                          
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
 
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={IUD} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold text-center">
                                                 IUD (Intrauterine Device)
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={Inject} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold text-center">
                                                  Injectable
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={Implant} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold text-center">
                                                Implant
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={CONDOM} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold text-center">
                                                   Condom
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
 
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={POP} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold text-center">
                                                    POP (Progestin-Only Pill)
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={Interval} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold text-center">
                                                  Interval
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={BBT} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold ">
                                                 BBT (Basal Body Temperature )
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={POST} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold text-center">
                                                 Post-Partum
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
 
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={STM} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold text-center">
                                                    STM (Sympto-Thermal )
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={SDM} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold ">
                                                  SDM (Standard Days Method)
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
                            <div className="card h-[268px] w-[225px] max-w-sm  border border-[#DCE0E0] rounded-[10px] flex flex-col" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <div className="h-[60%] w-full   border-black">
                                     <img src={LAM} className="h-full w-full object-cover rounded-tr-[10px] rounded-tl-[10px]" />
                                </div>
                                <div className="h-[40%] w-full  bg-[#FECAD5] " >
                                        <div className="h-[60%] w-full border-black  px-3">
                                            <p className="text-[25px] md:text-[28px] lg:text-[14px] font-roboto font-bold ">
                                                    LAM (Lactational Amenorrhea )
                                            </p>
                                            <p className="text-[11px] md:text-[14px] lg:text-[9px] montserrat font-medium text-left leading-3 text-[#666666] ">
                                                The combined oral contraceptive (COC) <br />pill is often just called 'the pill'. It contains ....                        
                                            </p>  
                                        </div>
                                        <div className="h-[40%] w-full border-black  flex justify-start items-start pl-3">
                                            <Button className="rounded-[5px] px-[10px] montserrat h-[2.2rem] bg-transparent border-2 border-[#FF456E] text-[#FF456E] hover:text-white" >Learn More</Button>
                                        </div>
                                </div>
                            </div>
                            

                            
                                <div className="card h-[291px] w-[728px]  bg-[#FECAD5] border border-[#DCE0E0] rounded-[10px] flex justify-center items-center" >                   
                                
                                        <iframe className="h-[270px] w-[658px] rounded-[10px]" src="https://www.youtube.com/embed/MkrEalHqDp8?si=HCB6ZP2eN7MtTUef" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        
                                </div>
                  

                    </div>

                </div>
        </div>
        <Footer/>
    </section>
  )
}

export default FamilyPlanning