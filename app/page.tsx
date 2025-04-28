import Image from "next/image";
import Link from "next/link";
import RscPage from "./rsc/page";
import Particle from "./components/Particle/Particle";


export default function Home() {
  return (
    <>
      <main className="max-w-[1000px] w-full mx-auto my-5 flex gap-6">
        <Link href='./tailwindvariants' className="inline-block px-4 py-2 bg-slate-300 rounded-md">TailwindVariants</Link>
        <Link href='./zustand' className="inline-block px-4 py-2 bg-red-300 rounded-md">Zustand</Link>
        <Link href='./framer-motion' className="inline-block px-4 py-2 bg-red-300 rounded-md">FramerMotion</Link>
        <Link href={'./rsc'} className="inline-block px-4 py-2 bg-blue-300 rounded-md">RSC</Link>
      </main>
      <Particle />
    </>
  );
}
