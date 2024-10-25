import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServiceClick = () => {
    setIsServicesOpen(false);
  };

  return (
    <header className="w-full shadow-lg bg-white " style={{marginBottom:".5rem", boxShadow:"0 4px 4px rgba(0, 0, 0, 0.25)"}}>
      <nav className="max-w-screen-2xl mx-auto px-4 lg:px-8 flex justify-between items-center py-3">
        <div className="flex gap-6 items-center flex-shrink-0">
          <a href="/">
            <img src={logo} alt="Logo" className="h-10" />
          </a>
        </div>
        <div
          className={`md:static absolute ${
            isMenuOpen ? "top-[60px]" : "top-[-100%]"
          } left-0 bg-white md:min-h-fit min-h-[60vh] md:w-auto w-full flex items-center md:justify-end px-5 transition-all duration-300`}
        >
          <ul className="flex md:flex-row flex-col md:items-center gap-8">
            <Link
              to="/home"
              className="hover:text-primary transition-colors duration-200 hover:border-b-2 hover:border-primary"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="hover:text-primary transition-colors duration-200 hover:border-b-2 hover:border-primary"
            >
              About
            </Link>
            <div
              className="relative flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a
                href="#"
                className="flex items-center hover:text-primary transition-colors duration-200 hover:border-b-2 hover:border-primary"
              >
                <p>Services</p>
                <ChevronDown className="ml-1 h-5" />
              </a>
              {isServicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2">
                  <ul className="flex flex-col gap-2 px-2 py-2">
                    <Link
                      to="/prenatal"
                      onClick={handleServiceClick}
                      className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                    >
                      Prenatal
                    </Link>
                    <hr className="border-gray-300" />
                    <Link
                      to="/delivery"
                      onClick={handleServiceClick}
                      className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                    >
                      Delivery
                    </Link>
                    <hr className="border-gray-300" />
                    <Link
                      to="/immunization"
                      onClick={handleServiceClick}
                      className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                    >
                      Immunization
                    </Link>
                    <hr className="border-gray-300" />
                    <Link
                      to="/tetanus"
                      onClick={handleServiceClick}
                      className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                    >
                      Tetanus
                    </Link>
                    <hr className="border-gray-300" />
                    <Link
                      to="/newborn-screening"
                      onClick={handleServiceClick}
                      className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                    >
                      Newborn Screening
                    </Link>
                    <hr className="border-gray-300" />
                    <Link
                      to="/newborn-hearing"
                      onClick={handleServiceClick}
                      className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                    >
                      Newborn Hearing
                    </Link>
                    <hr className="border-gray-300" />
                    <Link
                      to="/family-planning"
                      onClick={handleServiceClick}
                      className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                    >
                      Family Planning
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/faqs"
              className="hover:text-primary transition-colors duration-200 hover:border-b-2 hover:border-primary"
            >
              FAQ's
            </Link>
            <Link
              to="/locations"
              className="hover:text-primary transition-colors duration-200 hover:border-b-2 hover:border-primary"
            >
              Locations
            </Link>
            <Link
              to="/contacts"
              className="hover:text-primary transition-colors duration-200 hover:border-b-2 hover:border-primary"
            >
              Contacts
            </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <Button size="sm" className="rounded-full px-6 py-2">
            <a href="https://www.facebook.com/PaanakanSaMandaue">INQUIRE NOW</a>
          </Button>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
