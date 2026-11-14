import React from "react";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  twitterUrl = "#",
  instagramUrl = "#",
  linkedinUrl = "#",
}) => {
  return (
    <div className="flex flex-col w-full group">
      {/* Photo Container */}
      <div className="flex overflow-hidden items-end justify-center rounded-md bg-[#F5F5F5] h-[360px] md:h-[400px] w-full px-6 pt-6 transition-all duration-300 group-hover:shadow-md">
        <img
          loading="lazy"
          src={image}
          alt={`${name} - ${role}`}
          className="object-contain object-bottom h-[320px] md:h-[360px] w-auto max-w-full group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col items-start mt-6 text-left">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-wide text-black group-hover:text-[#DB4444] transition-colors duration-200">
          {name}
        </h3>
        <p className="mt-1.5 text-sm md:text-base text-gray-600 font-normal">
          {role}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-3 text-black">
          <a
            href={twitterUrl}
            aria-label={`${name}'s Twitter / X profile`}
            className="text-gray-700 hover:text-[#DB4444] hover:scale-110 transition-all duration-200 p-1"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a
            href={instagramUrl}
            aria-label={`${name}'s Instagram profile`}
            className="text-gray-700 hover:text-[#DB4444] hover:scale-110 transition-all duration-200 p-1"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href={linkedinUrl}
            aria-label={`${name}'s LinkedIn profile`}
            className="text-gray-700 hover:text-[#DB4444] hover:scale-110 transition-all duration-200 p-1"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
