"use client";

import React, { useState } from "react";
import StatCard from "./StatCard";
import { BiStore, BiShoppingBag } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbMoneybag } from "react-icons/tb";

const Stats: React.FC = () => {
  // Default to index 1 ("33k Monthly Product Sale") as shown in the design
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const stats = [
    {
      id: 0,
      iconNode: <BiStore className="w-7 h-7" />,
      value: "10.5k",
      description: "Sellers active on our site",
    },
    {
      id: 1,
      iconNode: <AiOutlineDollarCircle className="w-7 h-7" />,
      value: "33k",
      description: "Monthly Product Sale",
    },
    {
      id: 2,
      iconNode: <BiShoppingBag className="w-7 h-7" />,
      value: "45.5k",
      description: "Customers active on our site",
    },
    {
      id: 3,
      iconNode: <TbMoneybag className="w-7 h-7" />,
      value: "25k",
      description: "Annual gross sale on our site",
    },
  ];

  return (
    <section className="w-full max-w-[1170px] mx-auto px-4 mt-16 md:mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            iconNode={stat.iconNode}
            value={stat.value}
            description={stat.description}
            isActive={activeIndex === stat.id}
            onSelect={() => setActiveIndex(stat.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
