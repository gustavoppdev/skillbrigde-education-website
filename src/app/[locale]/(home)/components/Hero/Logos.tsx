// Next.js
import Image from "next/image";

// Constants
import { heroLogos } from "@/constants";

const Logos = () => {
  return (
    <ul className="p-2.5 md:p-3 lg:p-6 2xl:p-7.5 mt-7.5 md:mt-25 rounded-[8px] bg-white flex justify-between items-center">
      {heroLogos.map((logo, index) => (
        <li
          key={logo.alt}
          className={` py-5 px-7 xl:px-10 border-r border-r-app-white-95 last:border-r-0 ${
            index < 3
              ? "block"
              : index < 5
              ? "hidden sm:block"
              : index < 6
              ? "hidden md:block"
              : "hidden lg:block"
          }`}
        >
          <Image src={logo.image} alt={logo.alt} />
        </li>
      ))}
    </ul>
  );
};

export default Logos;
