import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl bg-white text-black p-3 rounded-xl">Welcome to Auth Application of <Link href="https://hariomchouhan.netlify.app/"  target="_blank" className="font-bold text-green-500 cursor-pointer">Hariom Chouhan</Link></h1>
      <Link href='/profile'
      className="border p-3 rounded-lg hover:bg-white hover:text-black">Go to Profile page</Link>
    </div>
  );
}
