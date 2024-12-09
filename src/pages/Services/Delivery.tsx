import Main from "../../assets/images/deliveryMain.png";

import babyDelivery from "../../assets/images/baby1Delivery.png";


function Delivery() {
  return (
    <section  className=" overflow-auto"> 
    <div className="container mx-auto h-[1750px] w-full mb-10 flex items-center justify-center" >

            <div className="flex flex-col justify-center h-full w-[85%] mt-10 items-center ">

                <div className="h-[100px] w-full mt-10 flex flex-col mb-5 justify-center items-center">
                    <div className="-500 h-[40%] w-full flex items-end justify-center mb-3">
                        <p className="text-[25px] md:text-[28px] lg:text-[30px] font-roboto font-bold">
                        What is Delivery?       
                        </p>
                    </div>
                    <div className=" h-[60%] w-[85%]">

                        <div className="h-[50%] w-full flex justify-center items-start ">
                            <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-5 text-[#666666] ">
                            Delivery in birthing refers to the process of the baby being born, encompassing stages such as cervical dilation, pushing, crowning, and the eventual expulsion of both the baby and the placenta, either through vaginal birth or a Cesarean section.
                            </p>               
                        </div>

                    </div>
                </div>

                <div className=" h-[1600px] w-full mt-10 md:flex-row   border-black  flex flex-row justify-between items-center overflow-y-auto overflow-x-hidden flex-wrap scrollbar-thin  scrollbar-[#FF456E]" >

                          <div className="w-full h-[384px]  rounded-[10px] overflow-hidden border-black ">
                              <img src={Main} alt="" className="object-cover w-full h-full" />
                          </div>
                          <div className="w-full h-[384px]   overflow-hidden border-black border">

                                    <div className="w-[40%] h-full border-black border">
                                         <img src={babyDelivery} className="h-full w-full" />
                                    </div>
                                    <div className="w-[60%] h-full border-black border">

                                    </div>

                          </div>
                          <div className="w-full h-[384px]   overflow-hidden border-black border">

                                <div className="w-[60%] h-full border-black border">

                                </div>
                                <div className="w-[40%] h-full border-black border">

                                </div>

                          </div>
                          <div className="w-full h-[384px]   overflow-hidden border-black border">

                                <div className="w-[40%] h-full border-black border">

                                </div>
                                <div className="w-[60%] h-full border-black border">

                                </div>

                          </div>

                </div>

            </div>
    </div>

</section>
  )
}

export default Delivery