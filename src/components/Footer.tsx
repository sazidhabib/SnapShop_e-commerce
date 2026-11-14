"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const supportLinks = [
    { text: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh." },
    { text: "exclusive@gmail.com" },
    { text: "+88015-88888-9999" },
  ];

  const accountLinks = [
    { text: "My Account", href: "/profile" },
    { text: "Login / Register", href: "/login" },
    { text: "Cart", href: "/cart" },
    { text: "Wishlist", href: "/wishlist" },
    { text: "Shop", href: "/product" },
  ];

  const quickLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms Of Use", href: "#" },
    { text: "FAQ", href: "#" },
    { text: "Contact", href: "/contact" },
  ];

  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0330c0494800b3088beb255eba1e66ce571f512ad5691c57e216433c05dc5f47?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef",
      alt: "LinkedIn",
    },
  ];

  return (
    <footer className="flex overflow-hidden flex-col justify-end pt-16 sm:pt-20 pb-6 mt-24 md:mt-36 w-full bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 max-w-[1170px] w-full mx-auto px-4">
        <div className="flex flex-col text-neutral-50 max-w-[260px]">
          <div className="flex flex-col self-start">
            <h2 className="text-2xl font-bold tracking-wider">SnapShop</h2>
            <h3 className="mt-6 text-xl font-medium">Subscribe</h3>
            <p className="mt-4 text-sm text-gray-300">Get 10% off your first order</p>
          </div>
          <form className="flex gap-2 items-center py-2.5 px-3 mt-4 text-sm rounded border border-neutral-50 w-full" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">Enter your email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-gray-400 outline-none w-full text-xs"
            />
            <button type="submit" aria-label="Subscribe" className="shrink-0 flex items-center">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bac8a3a4556d00df359345f40c4304fa01a92d9d278e1cc8be218cdcd6e20d8?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
                alt="Send"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
          </form>
        </div>

        <div className="flex flex-col text-neutral-50 max-w-[240px]">
          <h3 className="text-xl font-medium">Support</h3>
          <ul className="flex flex-col mt-6 space-y-4 text-sm text-gray-300">
            {supportLinks.map((link, index) => (
              <li key={index}>{link.text}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col text-neutral-50">
          <h3 className="text-xl font-medium">Account</h3>
          <ul className="flex flex-col mt-6 space-y-3 text-sm text-gray-300">
            {accountLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col text-neutral-50">
          <h3 className="text-xl font-medium">Quick Link</h3>
          <ul className="flex flex-col mt-6 space-y-3 text-sm text-gray-300">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col text-neutral-50">
          <h3 className="text-xl font-medium">Download App</h3>
          <p className="mt-4 text-xs text-gray-400">Save $3 with App New User Only</p>
          <div className="flex gap-3 items-center mt-3">
            <div className="bg-white p-1 rounded shrink-0 w-20 h-20 flex items-center justify-center">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5440fda2301de4db42cb3b78ea9e454c8a6e45def7b4a78502c73f2e432adfbb?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
                alt="QR Code"
                width={76}
                height={76}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df59572eb8c812f019934d33ba52be08e637c623b1c2c4343e086e5a6869b3c4?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
                alt="Google Play"
                width={110}
                height={30}
                className="object-contain"
              />
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c8569b4d912f2f0d95c365e51f1f979a971234e5fa2a900f3797efb56a7b34?placeholderIfAbsent=true&apiKey=f40e85373ac14970bb43d76751298eef"
                alt="App Store"
                width={110}
                height={30}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex gap-5 items-center mt-6">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" aria-label={icon.alt} className="hover:opacity-80 transition-opacity">
                <Image src={icon.src} alt={icon.alt} width={24} height={24} className="object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        <p>© Copyright SnapShop {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
