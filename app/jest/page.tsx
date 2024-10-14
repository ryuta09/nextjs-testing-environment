import Link from "next/link";
import JestButton from "./JestButton";

export default function Jest() {
  return(
    <>
      <div>
        <h1>Home</h1>
        <Link href="/">Home</Link>
        <JestButton />
      </div>
    </>
  )
}