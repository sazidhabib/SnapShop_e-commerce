import React from "react";

interface StatCardProps {
  icon?: string;
  iconNode?: React.ReactNode;
  value: string;
  description: string;
  isActive?: boolean;
  onSelect?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  iconNode,
  value,
  description,
  isActive = false,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.();
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      className={`group cursor-pointer select-none relative flex flex-col items-center justify-center py-8 px-6 rounded-md border transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-[#DB4444] focus-visible:ring-offset-2 ${
        isActive
          ? "bg-[#DB4444] text-white border-[#DB4444] shadow-lg -translate-y-1.5"
          : "bg-white text-black border-black/20 hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] hover:shadow-lg hover:-translate-y-1.5"
      }`}
    >
      {/* Icon with double-circle ring */}
      <div className="relative flex items-center justify-center w-20 h-20 mb-6">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive
              ? "bg-white/30"
              : "bg-black/10 group-hover:bg-white/30"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              isActive
                ? "bg-white text-black"
                : "bg-black text-white group-hover:bg-white group-hover:text-black"
            }`}
          >
            {iconNode ? (
              <div className="text-2xl transition-colors duration-300">
                {iconNode}
              </div>
            ) : icon ? (
              <img
                loading="lazy"
                src={icon}
                alt=""
                className={`w-10 h-10 object-contain transition-all duration-300 ${
                  isActive
                    ? "brightness-0 invert"
                    : "group-hover:brightness-0 group-hover:invert"
                }`}
              />
            ) : null}
          </div>
        </div>
      </div>

      {/* Number Value */}
      <div className="text-3xl font-bold tracking-wider leading-tight text-center">
        {value}
      </div>

      {/* Description */}
      <p
        className={`mt-2.5 text-sm text-center leading-snug transition-colors duration-300 ${
          isActive
            ? "text-white/90"
            : "text-gray-700 group-hover:text-white/90"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default StatCard;
