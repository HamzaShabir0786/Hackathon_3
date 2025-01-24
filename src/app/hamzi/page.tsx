"use client";
import { useState, useEffect } from "react";
export default function Hamzi() {
  let [count, setcount] = useState(1);
  let handler = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    alert("helo I am alert with blank array");
  }, []);
  useEffect(() => {
    alert("i am with fill array");
  }, [count]);
  return (
    <>
      <div>Hamzi page is here</div>
      <button className="bg-slate-500 text-white" onClick={handler}>
        click me{" "}
      </button>
      <p> {count}</p>
    </>
  );
}
