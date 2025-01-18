import Link from "next/link";
import ResponsiveNav from "../responsive-nav/responsiveNav";
// import { navlinks } from "@/sanity/schemaTypes/navlinks";

// remove async function from Nav2()
export default function Nav2() {
  return (
    <>
      <div className="max-w-[1440px] h-auto  m-auto  sticky top-0 z-50  ">
        <nav className=" contact-nav max-w-[1440px] block ">
          <h3 className="contact-nav-h3">Bandage</h3>
          <div className="ul-div ">
            <ul className="ul-nav specific-nav-2-ul">
              <li>
                <Link href="/" target="_blank">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/product1">Product</Link>
              </li>
              <li>
                <Link href="/pricing" target="_blank">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" target="_blank">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-btns-div">
            <button className="login-btn">Login</button>
            <button className="member-btn">
              Become a member
              <i className="fa-solid fa-solid-contact-nav fa-arrow-right"></i>
            </button>
          </div>
        </nav>
        <ResponsiveNav />
      </div>
    </>
  );
}
