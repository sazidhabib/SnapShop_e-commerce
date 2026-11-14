import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  name: string;
  icon: string;
  active?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon,
  active = false,
}) => {
  return (
    <Link
      href={`/product?category=${encodeURIComponent(name.toLowerCase())}`}
      className={`group flex overflow-hidden flex-col items-center justify-center p-6 rounded-lg border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
        active
          ? "bg-red-500 shadow-sm text-neutral-50 border-red-500"
          : "border-gray-200 text-black hover:border-red-500 hover:text-red-500 bg-white"
      } w-[170px] shrink-0 text-center`}
    >
      <div className="relative w-12 h-12 mb-3">
        <Image
          src={icon}
          className="object-contain"
          alt={`${name} icon`}
          fill
          sizes="48px"
        />
      </div>
      <p className="text-sm font-medium">{name}</p>
    </Link>
  );
};

export default CategoryCard;
