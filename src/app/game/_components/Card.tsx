import Link from "next/link";

const Location = "수성구";
const Category = "카페";

export default function Card() {
  return (
    <Link href="/" className="w-full flex flex-col">
      <h1 className="font-bold">
        {Location} {Category}
      </h1>
    </Link>
  );
}
