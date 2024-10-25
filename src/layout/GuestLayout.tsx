import Header from "./Header/Header1";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function GuestLayout({ children }: Props) {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default GuestLayout;
