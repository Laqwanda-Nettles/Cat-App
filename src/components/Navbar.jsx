import Link from "next/link";
import CatLogoSvg from "./CatLogoSvg";

export default function NavBar() {
  return (
    <header className="flex shadow-md py-4 px-4 mb-4 sm:px-10 bg-[#219ebc] text-white min-h-[80px]">
      <div className="flex flex-wrap items-center gap-5 w-full justify-between">
        <div className="flex gap-3 text-3xl font-bold">
          <CatLogoSvg />
          <h2>Cat App</h2>
        </div>
        <div>
          <ul className="flex justify-evenly items-center gap-5 text-xl font-semibold">
            <li>
              <Link className="hover:text-amber-400" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-400" href="/cat">
                Cat
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-400" href="/more-cats">
                More
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
