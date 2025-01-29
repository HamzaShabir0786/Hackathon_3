import Header from "@/app/components/Header/Header";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import Products from "@/app/components/products/products";
interface Props {
  params: { id: string };
}
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
const getProduct = async (id: string) => {
  return await client.fetch(
    `*[_type == "product" && _id == $id][0]{
      _id,
      title,
      description,
      price,
      dicountPercentage,
      tags,
      isNew,
      "productImage": productImage.asset->url
    }`,
    { id }
  );
};

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-[1440px] m-auto h-auto   ">
        <div className="px-2">
          <ul className="flex justify-between items-center w-[150px]  py-[20px] ">
            <li className="font-bold text-[14px]  text-[#252B42]">Home</li>
            <li>
              <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[30px]"></i>
            </li>
            <li className="font-bold text-[14px]  text-[#737373]">Pricing</li>
          </ul>
        </div>
        <div className="product-1-grid px-2  pb-[80px]  h-auto ">
          <div className="">
            <div className="h-[80%] w-auto bg-cover bg-no-repeat bg-center">
              <img
                src={product.productImage}
                alt={product.title}
                className="w-full h-[100%] object-cover rounded-lg"
              />
            </div>
            <div className="next-img-parent flex h-[75px] w-[12rem] gap-[20px] mt-[1.8rem]">
              <div className="next-img-div-1 bg-cover bg-no-repeat bg-center w-[50%]"></div>
              <div className="next-img-div-2 bg-cover bg-no-repeat bg-center w-[50%]"></div>
            </div>
          </div>
          <div className="  py-[20px] ">
            <div className="h-[80%]   grid-child-inner-1 flex flex-col justify-between">
              <h4 className="text-[20px] text-[#252B42]">{product.title}</h4>
              <div className="flex items-center justify-between w-[215px]    ">
                <div className="flex gap-x-1">
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-regular fa-star text-yellow-500"></i>
                </div>
                <div>
                  <h6 className="font-bold text-[#737373]">10 Reviews</h6>
                </div>
              </div>
              <h3 className="font-bold text-[24px] text-[#252B42]">
                ${product.price}
              </h3>
              <div className="flex gap-x-2 max-w-[180px] ">
                <h6 className="text-[#737373] font-bold text-[14px]">
                  Availability :
                </h6>
                <h6 className="text-[#23A6F0] font-bold text-[14px]">
                  In Stock{" "}
                </h6>
              </div>
              <div className="para-div-prodcut-1 description-div p-4 overflow-y-scroll">
                <p className="text-[14px] font-bold text-[#858585]">
                  {product.description}
                </p>
                <hr className="w-full border-t border-t-[#bdbdbd] my-[10px]" />
              </div>
              <div className="span-roll-div">
                <span className="span-1"></span>
                <span className="span-2"></span>
                <span className="span-3"></span>
                <span className="span-4"></span>
              </div>
              <div className=" flex justify-between items-center max-w-[310px]  mt-4">
                <div className="btn-div max-w-[158px] h-[45px] flex items-center cursor-pointer bg-[#23A6F0] py-[10px] px-[18px] rounded-md">
                  <h6 className="font-bold text-white text-[14px]">
                    select Options
                  </h6>
                </div>
                <div className="buy-heart-eye-icons-div ">
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-solid fa-eye"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
}
