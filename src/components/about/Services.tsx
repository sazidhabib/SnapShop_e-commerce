import React from "react";

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

const Service: React.FC = () => {
  const features: ServiceFeature[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0a7bd2a5e3513489be7039e049bc66d1b1434d1cc5f3befd26a6d4c3de66e8c?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/885e2fc6a1a866812344a678238b5fd24dd00416f935f34641161f18e9559297?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c1be3f37cdea8175ea2ee7a50fd0510114f5e02888e1167452b59c532555006?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="w-full max-w-[1170px] mx-auto px-4 mt-24 md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs p-4"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img
                loading="lazy"
                src={feature.icon}
                className="w-full h-full object-contain"
                alt={feature.title}
              />
            </div>
            <h4 className="mt-5 text-base md:text-lg font-bold tracking-wide uppercase text-black">
              {feature.title}
            </h4>
            <p className="mt-2 text-xs md:text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
