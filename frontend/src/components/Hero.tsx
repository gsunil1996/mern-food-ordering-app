import Image from "next/image";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <Image src={hero} alt="Hero Image" className="w-full max-h-[600px] object-cover" />
    </div>
  );
};

export default Hero;