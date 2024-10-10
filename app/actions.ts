"use server";
export const formAction = async (previousState: number) => {
  console.log(previousState)
  return previousState + 1
};
