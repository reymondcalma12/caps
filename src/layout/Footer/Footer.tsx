
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faFacebook  } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="container mx-auto h-72 w-full  flex items-center justify-center flex-col bg-[#FECAD5]" style={{ background: 'linear-gradient(180deg, #FECAD5 0%, #FECAD5 90%, white 90%, white 100%)' }} >
      
      <div className='flex items-center justify-center flex-row h-[90%] w-full'>

          <div className="flex flex-col justify-start items-center h-full w-1/3  border-[gray]  max-md:w-1/3">

                <p className="text-[18px] md:text-[23px] lg:text-[28px] font-roboto font-bold text-center leading-none mb-4 mt-12">
                  Paanakan Sa Mandaue</p>
                
                <p className="text-[11px] md:text-[14px] lg:text-[16px] montserrat font-medium text-center leading-none mb-4 text-[#353535]">
                Where Birth Becomes a Celebration. Experience compassionate  care and expert support in our welcoming birthing center </p>

                <div>
                  <a href="https://www.facebook.com/PaanakanSaMandaue/?locale=tl_PH">
                    <FontAwesomeIcon icon={faFacebook}  className='p-[10px] text-[30px] max-md:p-[3px] sm-md:text-[10px] text-[#FC7995] hover:text-[white]'/>
                  </a>

                  <a href="https://www.facebook.com/PaanakanSaMandaue/?locale=tl_PH">
                    <FontAwesomeIcon icon={faFacebookMessenger} className='p-[10px] text-[30px] max-md:p-[3px] sm-md:text-[10px] text-[#FC7995] hover:text-[white]'/>
                  </a>
                </div>
            
          </div>

          <div className="flex flex-col justify-start items-center h-full w-1/5   max-md:w-1/3">

            <p className="text-[14px] md:text-[17px] lg:text-[19px] font-roboto font-bold text-center leading-none mb-6 mt-12">
            ABOUT US</p>

            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-2 text-[#353535]">
            About Us </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-2 text-[#353535]">
            Our Vision </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-2 text-[#353535]">
            Our Mission </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-2 text-[#353535]">
            Our Philosophy </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-2 text-[#353535]">
            Our Team </p>

          </div>

          <div className="flex flex-col justify-start items-center h-full w-1/4  max-md:w-1/3">

            <p className="text-[14px] md:text-[17px] lg:text-[19px] font-roboto font-bold text-center leading-none mb-4  mt-12">
            OUR SERVICES</p>
            
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-1.5 text-[#353535]">
            Delivery </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-1.5 text-[#353535]">
            Prenatal/Postnatal Care </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-1.5 text-[#353535]">
            Immunization </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-1.5 text-[#353535]">
            Tetanus Toxoid/Hepa B </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-1.5 text-[#353535]">
            Newborn Screening </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-1.5 text-[#353535]">
            Newborn Hearing Screening Test </p>
            <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-1.5 text-[#353535]">
            Family Planning </p>

          </div>

          <div className="flex flex-col justify-start items-center h-full w-1/4  max-md:hidden">

            <p className="text-[14px] md:text-[17px] lg:text-[19px] font-roboto font-bold text-center leading-none mb-4 mt-12">
            CONTACT INFORMATION</p>

            <div className='h-3/4 w-full  border-black flex flex-row justify-center items-center'>

              <div className='w-1/4 h-full  border-black flex flex-col justify-start items-end'>
                  <FontAwesomeIcon icon={faPaperPlane} className='text-[20px] my-1 text-[#FC7995]'/>
                  <FontAwesomeIcon icon={faPhone} className='text-[20px] mt-4 text-[#FC7995]'/>
                  <FontAwesomeIcon icon={faEnvelope} className='text-[20px] mt-4 text-[#FC7995]'/>
                  <FontAwesomeIcon icon={faFacebookMessenger} className='text-[20px] mt-4 text-[#FC7995]'/>
              </div>

              <div className='w-3/4 h-full  border-black flex flex-col items-start'>

                  <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium  leading-none mb-4 text-[#353535] ml-3 text-center">
                  Lopez Jaena St, Tipolo,<br /> 
                  Mandaue City, 6014 Cebu </p>

                  <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-[1.3rem] text-[#353535] ml-5">
                  091234567891</p>

                  <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none mb-5 text-[#353535] ml-5">
                  sample@gmail.com</p>

                  <p className="text-[11px] md:text-[14px] lg:text-[15px] montserrat font-medium text-center leading-none  text-[#353535] ml-5">
                  Paanakan Sample</p>

              </div>

            </div>


          </div>

      </div>

      <div className='h-[10%] w-full flex justify-center items-center flex-row'>
      <FontAwesomeIcon icon={faCopyright} className='text-[#F0142F]'/>
        <p className="text-[11px] md:text-[12px] lg:text-[13px] montserrat font-medium text-center leading-none  text-[#353535] ml-2">
        2024 | Paanakan Sa Mandaue | All Rights Reserved</p>
      </div>

  </div>
  )
}

export default Footer