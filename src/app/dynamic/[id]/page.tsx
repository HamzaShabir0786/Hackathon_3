import Header from "@/app/components/Header/Header";
import { client } from "@/sanity/lib/client";
interface Props {
  params: { id: string };
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
      <div className="max-w-[800px] m-auto py-10">
        <img
          src={product.productImage}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        <p className="text-lg text-gray-600 mt-2">{product.description}</p>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-2xl font-bold">${product.price}</span>
          {product.dicountPercentage > 0 && (
            <span className="text-lg text-red-500 line-through">
              $
              {(product.price * (1 + product.dicountPercentage / 100)).toFixed(
                2
              )}
            </span>
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Tags</h3>
          <div className="flex gap-2 flex-wrap mt-2">
            {product.tags.map((tag?: "not found") => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
