import GridOption from "@/components/GridOption";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row-dense gap-6 m-6">
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          title="Shop Wardrobe"
          image="https://links.papareact.com/8ko"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="https://links.papareact.com/szu"
          className="bg-blue-100 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="https://links.papareact.com/n7r"
          className="bg-yellow-100 h-64"
        />
        <GridOption
          title="Shop Toys"
          image="https://links.papareact.com/pj2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="All you need fot Match Day"
          image="https://links.papareact.com/m8e"
          className="bg-red-100 row-span-2 col-span-2"
        />

        <GridOption
          title="Shop Gadjets"
          image="https://links.papareact.com/gs1"
          className="bg-orange-100 h-64"
        />

        <GridOption
          title="Shop Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100 h-64"
        />

        <GridOption
          title="Shop Sports"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100 h-64"
        />

        <GridOption
          title="Enjoy free shipping"
          image="https://links.papareact.com/4y0"
          className="bg-rose-100 h-64"
        />

        <GridOption
          title="Flash Deals"
          image="https://links.papareact.com/qx7"
          className="bg-orange-100 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
