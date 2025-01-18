"use client";
import { Image as IImage } from "sanity";
//import productData from "../../../public/innovationData.json";

import { client } from "@/sanity/lib/client";
const getproduct = async () => {
  const res = await client.fetch(
    `*[_type == "product"]{
            _id,
          title,
          price,
          dicountPercentage,
          tags,
          isNew,
          "productImage": productImage.asset->url
        }`
  );
  return res;
};
getproduct();

interface DataType {
  title: string;
  description: string;
  price: number;
  dicountPercentage: number;
  tags: string[];
  isNew: boolean;
  productImage: IImage;
  _id: string;
}
export default async function FeaturedProducts() {
  const Data: DataType[] = await getproduct();
  return (
    <>
      <div className="max-w-[1444px] h-[auto]  m-auto">
        <div className="max-w-[1044px] h-[auto]  px-2 m-auto">
          <div className=" text-center py-[80px]">
            <h4 className="font-[400]  text-[20px] text-[#737373] ">
              Featured Products
            </h4>
            <h3 className="font-bold text-[24px] ">BESTSELLER PRODUCTS</h3>
            <p className="text-[14px] font-[400] text-[# title-p737373]">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>

          <div className="feature-grid  pb-[80px] ">
            {Data.map((items: DataType) => {
              return (
                <div className="feature-grid-items f-g-i-1" key={items._id}>
                  <div
                    className="nested-all-feature-1 n-f-1 "
                    style={{
                      //backgroundImage: `url(${urlForImg(items.image)})`,
                      backgroundImage: `url(${items.productImage})`,
                    }}
                  ></div>

                  <div className="nested-all-feature-2 n-f-2-1">
                    <h5 className="text-[16px] font-bold">{items.title} </h5>
                    <p className="text-[14px] text-[#737373] text-bold title-p">
                      {items.description}
                      description
                    </p>
                    <div className="span-div-price">
                      <div className="price-1">${items.price} </div>
                      <div className="price-2 ">${items.dicountPercentage}</div>
                    </div>
                    <div className="roll-div">
                      <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-1"></div>
                      <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-2"></div>
                      <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-3"></div>
                      <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-4"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
// import { Image as IImage } from "sanity";
// import { urlForImg } from "@/sanity/lib/image";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";

// const getproduct = async () => {
//   const res = await client.fetch(
//     `*[_type == "product"]{title, description, new_price ,old_price, image, product_id}`
//   );
//   return res;
// };

// interface DataType {
//   title: string;
//   description: string;
//   old_price: number;
//   new_price: number;
//   image: IImage;
//   product_id: number;
// }

// export default function FeaturedProducts() {
//   const [data, setData] = useState<DataType[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const products = await getproduct();
//         setData(products);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-[1444px] h-[auto] m-auto">
//       <div className="max-w-[1044px] h-[auto] px-2 m-auto">
//         <div className="text-center py-[80px]">
//           <h4 className="font-[400] text-[20px] text-[#737373]">
//             Featured Products
//           </h4>
//           <h3 className="font-bold text-[24px]">BESTSELLER PRODUCTS</h3>
//           <p className="text-[14px] font-[400] text-[#737373]">
//             Problems trying to resolve the conflict between{" "}
//           </p>
//         </div>

//         <div className="feature-grid pb-[80px]">
//           {data.map((items) => (
//             <div className="feature-grid-items f-g-i-1" key={items.product_id}>
//               <div
//                 className="nested-all-feature-1 n-f-1"
//                 style={{
//                   backgroundImage: `url(${urlForImg(items.image)})`,
//                 }}
//               ></div>

//               <div className="nested-all-feature-2 n-f-2-1">
//                 <h5 className="text-[16px] font-bold">{items.title}</h5>
//                 <p className="text-[14px] text-[#737373] font-bold title-p">
//                   {items.description}
//                 </p>
//                 <div className="span-div-price">
//                   <div className="price-1">${items.old_price}</div>
//                   <div className="price-2">${items.new_price}</div>
//                 </div>
//                 <div className="roll-div">
//                   <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-1"></div>
//                   <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-2"></div>
//                   <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-3"></div>
//                   <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-4"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
