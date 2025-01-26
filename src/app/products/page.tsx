"use client";

import { useEffect, useState } from "react";
import { Image as IImage } from "sanity";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const getproduct = async () => {
  return await client.fetch(
    `*[_type == "product"]{
      _id,
      title,
      description,
      price,
      dicountPercentage,
      tags,
      isNew,
      "productImage": productImage.asset->url
    }`
  );
};

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

export default function FeaturedProducts() {
  const [products, setProducts] = useState<DataType[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getproduct();
      setProducts(data);
    })();
  }, []);

  // return (
  //   <div className="max-w-[1444px] h-[auto] m-auto">
  //     <div className="max-w-[1044px] h-[auto] px-2 m-auto">
  //       <div className="text-center py-[80px]">
  //         <h4 className="font-[400] text-[20px] text-[#737373]">
  //           Featured Products
  //         </h4>
  //         <h3 className="font-bold text-[24px]">BESTSELLER PRODUCTS</h3>
  //         <p className="text-[14px] font-[400] text-[#737373]">
  //           Problems trying to resolve the conflict between
  //         </p>
  //       </div>

  //       <div className="feature-grid pb-[80px]">
  //         {products.map((product) => (
  //           <div className="feature-grid-items f-g-i-1 " key={product._id}>
  //             <div
  //               className="nested-all-feature-1 n-f-1"
  //               style={{
  //                 backgroundImage: `url(${product.productImage})`,
  //               }}
  //             ></div>

  //             <div className="nested-all-feature-2 n-f-2-1">
  //               <h5 className="text-[16px] font-bold">{product.title}</h5>
  //               <p className="text-[14px] text-[#737373]">
  //                 {/* {product.description} */}
  //                 description
  //               </p>

  //               <div className="span-div-price">
  //                 <div className="price-1">${product.price}</div>
  //                 <div className="price-2">${product.dicountPercentage}</div>
  //               </div>
  //               <div className="roll-div">
  //                 <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-1"></div>
  //                 <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-2"></div>
  //                 <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-3"></div>
  //                 <div className="w-[16px] h-[16px] rounded-[50%] roll-bg-4"></div>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="max-w-[1444px] h-[auto] m-auto">
      <div className="max-w-[1044px] h-[auto] px-2 m-auto">
        <div className="text-center py-[80px]">
          <h4 className="font-[400] text-[20px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-bold text-[24px]">BESTSELLER PRODUCTS</h3>
          <p className="text-[14px] font-[400] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="feature-grid pb-[80px]">
          {products.map((product) => (
            <div className="feature-grid-items f-g-i-1" key={product._id}>
              <Link key={product._id} href={`/dynamic/${product._id}`}>
                <div
                  className="nested-all-feature-1 n-f-1"
                  style={{
                    backgroundImage: `url(${product.productImage})`,
                  }}
                ></div>
              </Link>

              <div className="nested-all-feature-2 n-f-2-1">
                <h5 className="text-[16px] font-bold">{product.title}</h5>
                <p className="text-[14px] text-[#737373]">description</p>

                <div className="span-div-price">
                  <div className="price-1">${product.price}</div>
                  <div className="price-2">${product.dicountPercentage}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
