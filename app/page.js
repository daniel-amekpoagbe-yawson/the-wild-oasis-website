import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h2>the wild oasis. Welcome to paradise </h2>

      <Link href={"/about"}>About Us</Link>
    </div>
  );
}
