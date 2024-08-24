import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="max-w-[1000px] w-full mx-auto my-5">
      <Link href='./tailwindvariants' className="inline-block px-4 py-2 bg-slate-300 rounded-md">TailwindVariants</Link>
      <Link href='./zustand' className="inline-block px-4 py-2 bg-red-300 rounded-md">Zustand</Link>
    </main>
    </>
  );
}
