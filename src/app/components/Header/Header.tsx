"use client";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import ResponsiveNav from "../responsive-nav/responsiveNav";

export default function Header() {
  const Data = [
    { title: "Home" },
    { title: "Shop" },
    { title: "About" },
    { title: "Blog" },
    { title: "Contact" },
    { title: "Products" },
    { title: "Pricing" },
  ];

  const [cartImportData, setCartImportData] = useState<any[]>([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const loadCart = () => {
    const storedCart = localStorage.getItem("mycart");
    if (storedCart) {
      setCartImportData(JSON.parse(storedCart));
    } else {
      setCartImportData([]);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    localStorage.setItem("mycart", JSON.stringify(cartImportData));
  }, [cartImportData]);

  useEffect(() => {
    const updateCart = () => {
      loadCart();
    };

    window.addEventListener("cartUpdated", updateCart);
    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const totalItems = cartImportData.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = cartImportData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const addToCart = (product: any) => {
    const existingItem = cartImportData.find(
      (item) => item._id === product._id
    );
    let updatedCart;
    if (existingItem) {
      updatedCart = cartImportData.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cartImportData, { ...product, quantity: 1 }];
    }
    // Update state and localStorage synchronously.
    setCartImportData(updatedCart);
    localStorage.setItem("mycart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (id: string) => {
    const updatedCart = cartImportData.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartImportData(updatedCart);
    localStorage.setItem("mycart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cartImportData.map((item) =>
      // Only decrease if quantity is more than 1.
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartImportData(updatedCart);
    localStorage.setItem("mycart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cartImportData.filter((item) => item._id !== id);
    setCartImportData(updatedCart);
    localStorage.setItem("mycart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleCheckout = () => {
    alert(`Thank you, ${checkoutDetails.name}! Your order has been placed.`);
    setCartImportData([]);
    setIsCheckout(false);
    setCheckoutDetails({ name: "", email: "", address: "" });
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckoutDetails({ ...checkoutDetails, [e.target.name]: e.target.value });
  };

  const ref = useRef<HTMLDivElement>(null);
  const toggleCart = () => {
    if (ref.current) {
      ref.current.classList.toggle("hidden");
      ref.current.classList.toggle("visible");
    }
  };

  const pathname = usePathname();

  return (
    <nav className="nav-con max-w-[100%] m-auto sticky top-0 z-50 bg-[#252B42]">
      <div className="child-nav-1 h-[3rem] flex items-center justify-between px-4 text-white">
        <div className="flex items-center gap-6">
          <i className="fa-solid fa-phone"></i>
          <h6>(225)555-0118</h6>
          <i className="fa-solid fa-message"></i>
          <h6>hamzii2205@gmail.com</h6>
        </div>
        <div>
          <h6 className="text-[14px] font-bold">
            Follow Us and get a chance to Win 80% Off
          </h6>
        </div>
      </div>

      <div className="child-nav-2 bg-white px-4 h-[4rem] flex items-center justify-between">
        <h3 className="font-bold text-[24px]">Bandage</h3>

        <ul className="flex list-none font-bold gap-[15px] text-[#737373] text-[13px]">
          {Data.map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.title === "Home" ? "" : item.title.toLowerCase()}`}
                className={
                  pathname ===
                  `/${item.title === "Home" ? "" : item.title.toLowerCase()}`
                    ? "text-blue-800 bg-blue-100 p-2 rounded-lg"
                    : "hover:bg-blue-100 hover:p-2 hover:rounded-md"
                }
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-[#23a6f0]">
          <div>
            <i className="fa-solid fa-user pr-2"></i>
            <a href="#">Login</a> / <a href="#">Register</a>
          </div>

          <div className="relative cursor-pointer" onClick={toggleCart}>
            <i className="fa-solid fa-cart-shopping"></i>
            {totalItems > 0 && (
              <span className="absolute top-[-8px] right-[-8px] h-4 w-4 rounded-full bg-[#23a6f0] text-white text-[8px] flex justify-center items-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="sideCart w-[350px] min-h-[40rem] max-h-[auto] absolute top-0 right-0 bg-[#252B42] text-white hidden"
      >
        <div className="flex justify-between items-center bg-[#252B42] p-4">
          <b>Shopping Cart</b>
          <b onClick={toggleCart} className="text-[30px] cursor-pointer">
            x
          </b>
        </div>

        {!isCheckout ? (
          <div>
            <ol className="flex flex-col gap-y-1">
              {cartImportData.map((e, index) => (
                <li key={index} className="bg-gray-50 text-black py-2">
                  <div className="flex justify-around items-center gap-5">
                    <span className="min-w-[120px] max-w-[121px] text-center">
                      {e.title}
                    </span>
                    <span
                      onClick={() => decreaseQuantity(e._id)}
                      className="cursor-pointer min-w-[20px] max-w-[20px] px-2"
                    >
                      -
                    </span>
                    <span className="min-w-[20px] max-w-[30px]">
                      {e.quantity}
                    </span>
                    <span
                      onClick={() => increaseQuantity(e._id)}
                      className="cursor-pointer"
                    >
                      +
                    </span>
                    <span className="max-w-[auto] min-w-[60px]">
                      ${e.price * e.quantity}
                    </span>
                    <i
                      onClick={() => removeFromCart(e._id)}
                      className="text-[#23a6f0] fa-solid fa-trash cursor-pointer px-[3px]"
                    ></i>
                  </div>
                </li>
              ))}
            </ol>

            <div
              className="bg-sky-500 text-white p-2  w-32 rounded-md flex justify-around items-center cursor-pointer hover:bg-sky-600 ml-[30%] mt-4 mb-4 "
              onClick={() => setIsCheckout(true)}
            >
              <span>Checkout</span>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={checkoutDetails.name}
              onChange={handleChange}
              className="w-full p-2 mb-2 rounded text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={checkoutDetails.email}
              onChange={handleChange}
              className="w-full p-2 mb-2 rounded text-black"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={checkoutDetails.address}
              onChange={handleChange}
              className="w-full p-2 mb-4 rounded text-black"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setIsCheckout(false)}
                className="bg-gray-500 px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
              >
                Place Order (${totalPrice.toFixed(2)})
              </button>
            </div>
          </div>
        )}
      </div>

      <ResponsiveNav />
    </nav>
  );
}
