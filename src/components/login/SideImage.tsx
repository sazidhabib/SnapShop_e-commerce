import React from "react";

const SideImage: React.FC = () => {
  return (
    <section className="hidden lg:flex overflow-hidden rounded-xl bg-[#CBE4E8] max-w-[620px] w-full items-center justify-center p-8 shadow-sm">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ff408ee612dbb33d2f787373e344b420b1316185128daa899473c17b86d4a35?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
        alt="SnapShop shopping experience"
        className="object-contain w-full h-auto max-h-[480px]"
      />
    </section>
  );
};

export default SideImage;
