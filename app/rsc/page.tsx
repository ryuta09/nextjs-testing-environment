"use client";
import { useFormState, useFormStatus } from "react-dom";
import { formAction } from "../actions";
import IncrementButton from "./IncrementButton";

export default function RscPage() {
  const [state, formDispatch] = useFormState(formAction, 0);

  return (
    <>
      <div className="flex  items-center justify-center mt-10">
        <form action={formDispatch}>
          <IncrementButton />
        </form>
        <span>{state}</span>
      </div>
    </>
  );
}
