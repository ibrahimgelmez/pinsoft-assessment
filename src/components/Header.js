import pinstorelogo from "../imgs/pinstore-logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#cc5500] py-2">
      <Link className="flex justify-center items-center" to={"/"}>
        <img
          src={pinstorelogo}
          alt="pinstore-logo"
          className="h-[66px] w-[70px]"
        />
      </Link>
    </header>
  );
}
