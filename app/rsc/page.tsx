'use client'
import { useFormStatus } from "react-dom";
import { formAction } from "../actions";
import IncrementButton from "./IncrementButton";

export default function RscPage() {



  return (
    <>
      <div className="flex  items-center justify-center mt-10">
        <form action={formAction}>
        <IncrementButton />
        </form>
      </div>
    </>
  );
}
