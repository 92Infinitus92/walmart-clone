import { Grid2X2, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex bg-walmart px-10 py-7 space-x-5">
      <Link href={"/"}>
        <Image
          src={"https://links.papareact.com/yur"}
          width={150}
          height={150}
          alt={"Walmart"}
        />
      </Link>

      <form
        action=""
        className="flex items-center bg-white rounded-full w-full flex-1"
      >
        <input
          type="text"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button className="" type="submit">
          <Search className="rounded-full h-10 bg-yellow-400 cursor-pointer px-2 w-10" />
        </button>
      </form>

      <div>
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          Departments
        </Link>
      </div>
    </header>
  );
}
export default Header;
