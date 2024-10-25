import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  MapPin,
  Phone,
  Search,
} from "lucide-react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <header className="py-4 lg:pt-4 lg:pb-12">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0 ">
        <div className="flex justify-center lg:justify-normal">
          <a href="/">
            <img src={logo} alt="Logo" className="h-8" />
          </a>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div className="flex items-center justify-center gap-x-1">
            <MapPin className="h-5 text-primary break-words" />
            <div className="text-textSecondary text-[14px]">
              Lopez Jaena St, Tipolo, Mandaue City
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-1">
            <Phone className="h-5 text-primary" />
            <div className="text-textSecondary text-[14px]">091234567891</div>
          </div>
          <Button size="sm" className="w-[200px] lg:w-auto mx-auto">
            <a
              href="https://www.facebook.com/PaanakanSaMandaue"
              className="text-[12px]"
            >
              INQUIRE NOW
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <MobileNav
          isNavOpen={isNavOpen}
          toggleNav={toggleNav}
          navRef={navRef}
        />

        {/* Desktop Nav */}
        <DesktopNav />
      </div>
    </header>
  );
}

export default Header;

interface MobileNavProps {
  isNavOpen: boolean;
  toggleNav: () => void;
  navRef: React.RefObject<HTMLDivElement>;
}

function MobileNav({ isNavOpen, toggleNav, navRef }: MobileNavProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    toggleNav();
  };

  return (
    <nav
      ref={navRef}
      className={`bg-white h-screen fixed w-[300px] top-0 ${
        isNavOpen ? "left-0" : "-left-[300px]"
      } shadow-2xl lg:hidden transition-all duration-300 z-20`}
    >
      <div
        className="bg-textPrimary text-white w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg transition-all cursor-pointer hover:bg-textTertiary"
        onClick={toggleNav}
      >
        {isNavOpen ? <ChevronLeft /> : <ChevronRight />}
      </div>
      <div className="px-10 flex flex-col gap-y-8 h-full max-h-full overflow-y-auto">
        <a href="/">
          <img src={logo} alt="Logo" className="h-10" />
        </a>

        <ul className="flex flex-col">
          <Link
            to="/home"
            className="p-2 hover:rounded-md hover:bg-gray-100 text-textSecondary hover:text-primary transition-all duration-300"
            onClick={toggleNav}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="p-2 hover:rounded-md hover:bg-gray-100 text-textSecondary hover:text-primary transition-all duration-300"
            onClick={toggleNav}
          >
            About Us
          </Link>
          <div onClick={toggleServices}>
            <a
              href="#"
              className="p-2 hover:rounded-md hover:bg-gray-100 flex items-center  text-textSecondary hover:text-primary transition-colors duration-200"
            >
              <p>Services</p>
              {isServicesOpen ? (
                <ChevronUp className="ml-2 transition-all duration-300" />
              ) : (
                <ChevronUp className="ml-2 rotate-180 transition-all duration-300 " />
              )}
            </a>
            {isServicesOpen && (
              <div className="p-4 px-2 rounded-md">
                <ul className="flex flex-col gap-2 text-textSecondary">
                  <Link
                    to="/prenatal"
                    onClick={handleServiceClick}
                    className="p-2 hover:rounded-md hover:bg-gray-100 text-sm transition-colors duration-200 py-1 px-3 rounded"
                  >
                    Prenatal
                  </Link>
                  <Link
                    to="/delivery"
                    onClick={handleServiceClick}
                    className="p-2 hover:rounded-md hover:bg-gray-100 text-sm transition-colors duration-200 py-1 px-3 rounded"
                  >
                    Delivery
                  </Link>
                  <Link
                    to="/immunization"
                    onClick={handleServiceClick}
                    className="p-2 hover:rounded-md hover:bg-gray-100 text-sm transition-colors duration-200 py-1 px-3 rounded"
                  >
                    Immunization
                  </Link>
                  <Link
                    to="/tetanus"
                    onClick={handleServiceClick}
                    className="p-2 hover:rounded-md hover:bg-gray-100 text-sm transition-colors duration-200 py-1 px-3 rounded"
                  >
                    Tetanus
                  </Link>
                  <Link
                    to="/newborn-screening"
                    onClick={handleServiceClick}
                    className="p-2 hover:rounded-md hover:bg-gray-100 text-sm transition-colors duration-200 py-1 px-3 rounded"
                  >
                    Newborn Screening
                  </Link>
                  <Link
                    to="/newborn-hearing"
                    onClick={handleServiceClick}
                    className=" p-2 hover:rounded-md hover:bg-gray-100 text-sm transition-colors duration-200 py-1 px-3 rounded"
                  >
                    Newborn Hearing
                  </Link>
                  <Link
                    to="/family-planning"
                    onClick={handleServiceClick}
                    className=" p-2 hover:rounded-md hover:bg-gray-100 text-sm transition-colors duration-200 py-1 px-3 rounded"
                  >
                    Family Planning
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <Link
            to="/faqs"
            className="p-2 hover:rounded-md hover:bg-gray-100 text-textSecondary hover:text-primary transition-all duration-300"
            onClick={toggleNav}
          >
            FAQ's
          </Link>
          <Link
            to="/location"
            className="p-2 hover:rounded-md hover:bg-gray-100 text-textSecondary hover:text-primary transition-all duration-300"
            onClick={toggleNav}
          >
            Location
          </Link>
          <Link
            to="/contacts"
            className="p-2 hover:rounded-md hover:bg-gray-100 text-textSecondary hover:text-primary transition-all duration-300"
            onClick={toggleNav}
          >
            Contact
          </Link>
        </ul>
        <SearchForm isMobile />
      </div>
    </nav>
  );
}

function DesktopNav() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
      <ul className="flex gap-x-4 text-textSecondary">
        <li>
          <Link
            to="/home"
            className="border-r pr-4 hover:text-primary transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="border-r pr-4 hover:text-primary transition-all duration-300"
          >
            About Us
          </Link>
        </li>
        <li
          className="relative flex items-center"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <Link
            to="#"
            className="text-textSecondary border-r pr-4 flex items-center hover:text-primary transition-all duration-300"
          >
            <span>Services</span>
            <ChevronDown className="ml-1 h-5" />
          </Link>
          {isServicesOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 ">
              <ul className="flex flex-col gap-2 px-2 py-2">
                <Link
                  to="/prenatal"
                  className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                >
                  Prenatal
                </Link>
                <hr className="border-gray-300" />
                <Link
                  to="/delivery"
                  className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                >
                  Delivery
                </Link>
                <hr className="border-gray-300" />
                <Link
                  to="/immunization"
                  className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                >
                  Immunization
                </Link>
                <hr className="border-gray-300" />
                <Link
                  to="/tetanus"
                  className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                >
                  Tetanus
                </Link>
                <hr className="border-gray-300" />
                <Link
                  to="/newborn-screening"
                  className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                >
                  Newborn Screening
                </Link>
                <hr className="border-gray-300" />
                <Link
                  to="/newborn-hearing"
                  className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                >
                  Newborn Hearing
                </Link>
                <hr className="border-gray-300" />
                <Link
                  to="/family-planning"
                  className="text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200 py-1 px-3 rounded hover:border-b-2 hover:border-primary"
                >
                  Family Planning
                </Link>
              </ul>
            </div>
          )}
        </li>
        <li>
          <Link
            to="/faqs"
            className="border-r pr-4 hover:text-primary transition-all duration-300"
          >
            FAQ's
          </Link>
        </li>
        <li>
          <Link
            to="/locations"
            className="border-r pr-4 hover:text-primary transition-all duration-300"
          >
            Location
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            className="hover:text-primary transition-all duration-300"
          >
            Contacts
          </Link>
        </li>
      </ul>
      <SearchForm />
    </nav>
  );
}
interface SearchFormProps {
  isMobile?: boolean;
}

function SearchForm({ isMobile }: SearchFormProps) {
  return (
    <form
      className={`relative flex items-center ${
        isMobile ? "gap-x[10px]" : "gap-x-[10px]"
      }`}
    >
      <label htmlFor={isMobile ? "m_search_input" : "search_input"}>
        <Search
          className={
            isMobile ? "text-primary" : "text-2xl text-primary cursor-pointer"
          }
        />
      </label>
      <input
        type="text"
        id={isMobile ? "m_search_input" : "search_input"}
        placeholder="Search..."
        className={`px-2 text-textSecondary outline-none ${
          isMobile
            ? "w-full border-b-2 focus:border-b-2"
            : "w-[100px] focus:w-[200px] focus:border-b-2"
        } ${
          isMobile
            ? "placeholder:italic"
            : "placeholder:italic placeholder:text-base"
        } transition-all duration-200`}
      />
    </form>
  );
}
