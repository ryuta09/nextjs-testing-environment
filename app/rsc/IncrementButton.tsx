import React from "react";
import { useFormStatus } from "react-dom";

const IncrementButton = () => {
  // pending状態を取得するにはformの中でコンポーネントを作成してその中でuseFormStatusを使う必要がある
  const { pending } = useFormStatus();
  return (
    <>
      <button className={`px-4 py-2 border-2 rounded-md border-red-400 ${pending && "border-green-200"}`} disabled={pending}>
        Increment
      </button>
      <p>{pending && "送信中です！"}</p>
    </>
  );
};

export default IncrementButton;
