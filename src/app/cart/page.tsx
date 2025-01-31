"use client";
import { My_Soul } from "next/font/google";
import { useEffect, useState } from "react";
export default function CartPage() {
  const [mydata, setMyData] = useState();

  useEffect(() => {
    let value: any = localStorage.getItem("mycart");
    setMyData(value);
  }, []);
  return (
    <>
      <h1>here is data {mydata}</h1>
    </>
  );
}
