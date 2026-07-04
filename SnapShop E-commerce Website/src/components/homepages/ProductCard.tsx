import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  discount: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  discount,
}) => {
  return (
    <article className="flex flex-col min-w-[240px] w-[270px]">
      <div className="flex overflow-hidden gap-1 items-start px-3 pt-3 pb-12 max-w-full rounded bg-neutral-100 w-[270px]">
        <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
          <div className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
            {discount}
          </div>
          <img
            loading="lazy"
            src={image}
            className="object-contain self-end mt-3 max-w-full aspect-[1.13] w-[172px]"
            alt={name}
          />
        </div>
        <div className="flex flex-col">
          <button aria-label="Add to favorites" className="focus:outline-none">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
              className="object-contain aspect-square w-[34px]"
              alt=""
            />
          </button>
          <button aria-label="Quick view" className="focus:outline-none mt-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
              className="object-contain aspect-square w-[34px]"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
        <h3 className="self-stretch text-black">{name}</h3>
        <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
          <span className="text-red-500">{price}</span>
          <span className="text-black opacity-50">{originalPrice}</span>
        </div>
        <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < rating ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth={i < rating ? "0" : "1.5"}
                className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
              >
                <path d="M12 .587l3.668 7.429 8.2 1.192-5.935 5.784 1.4 8.165L12 18.896l-7.333 3.861 1.4-8.165L.132 9.208l8.2-1.192L12 .587z" />
              </svg>
            ))}
          </div>
          <span className="w-8 opacity-50">({reviews})</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
