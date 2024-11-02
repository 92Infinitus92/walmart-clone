"use client";

import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingBasket,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Header() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchInput) {
      router.push(`/search/${searchInput}`);
    }
  };
  return (
    <header className="flex flex-col md:flex-row bg-walmart items-center px-10 py-7 space-x-5">
      <Link href={"/"} className="mb-5 md:mb-0 flex space-x-3">
        <p className="text-white text-3xl tracking-tight font-semibold font-sans">
          Walmart
        </p>
        <Image
          src={"https://walmart.com/favicon.ico"}
          width={32}
          height={32}
          alt={"Walmart"}
        />
      </Link>

      <form
        action=""
        className="flex items-center bg-white rounded-full w-full flex-1"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button className="" type="submit">
          <Search className="rounded-full h-10 bg-yellow-400 cursor-pointer px-2 w-10" />
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          Departments
        </Link>

        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          Services
        </Link>

        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>

        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>

        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingBasket size={20} />
          <div>
            <p className="text-xs font-extralight">No Items</p>
            <p>$0.00</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
export default Header;
