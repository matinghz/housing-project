"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "خانه", href: "/" },
  { name: "رزرو سریع", href: "/sss" },
  { name: "رهن و اجاره", href: "/aaa" },
  { name: "مقالات", href: "/bbb" },
  { name: "درباره ما", href: "/ccc" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="px-12 py-6 flex justify-between items-center">
      <div className="text-[24px] text-center text-[#0D3B66] font-bold flex gap-3">
        ریفیوژن
      </div>
      <div className="h-[31px] flex gap-11">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={
              pathname === link.href
                ? "text-[#0D3B66] font-bold border-b-2 border-[#0D3B66] text-[20px]"
                : "text-[#1E2022] text-[20px]"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-5">
        <button className="px-6 h-[43px] bg-[#0D3B66] text-white text-[20px] text-center rounded-[40px] cursor-pointer">
          ورود
        </button>
        <button className="px-[33px] h-[43px] border border-[#0D3B66] text-[#0D3B66] text-[20px] text-center rounded-[40px] cursor-pointer">
          ثبت نام
        </button>
      </div>
    </div>
  );
};

export default Header;
