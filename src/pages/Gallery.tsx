import React from 'react'

import midWife from "../assets/images/midwife.png";
import baby from "../assets/images/gallery.png";
import Footer from '@/layout/Footer/Footer';



function Gallery() {
  return (
    <section  className=" overflow-auto"> 
        <div className="container mx-auto h-[1500px] w-full mb-10 flex items-center justify-center" >

                <div className="flex flex-col justify-center h-full w-[85%] mt-10 items-center -z-50">

                    <div className="h-[100px] w-full mt-10 flex flex-col">
                        <div className="-500 h-[40%] w-full flex items-end justify-center mb-5">
                            <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold">
                                Tan awa ang gallery
                            </p>
                        </div>
                        <div className=" h-[60%] w-full">

                            <div className="h-[50%] w-full flex justify-center items-start ">
                                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#666666] ">
                                    Fast, Simple And Routine Procedures To Maintain Easy Birth
                                </p>               
                            </div>

                        </div>
                    </div>

                    <div className=" h-[1300px] w-[85%]  md:flex-row   border-black  flex flex-row justify-center items-center overflow-y-auto overflow-x-hidden flex-wrap scrollbar-thin gap-6 scrollbar-[#FF456E]" >

                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>
                            <div className="card h-[268px] w-[205px] max-w-sm  border border-[#DCE0E0] rounded-[20px] " style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>                   
                                <img src={baby} className="h-full w-full object-cover rounded-[20px]" />
                            </div>                      

                    </div>

                </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Gallery