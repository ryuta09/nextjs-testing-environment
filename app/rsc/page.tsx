export default function RscPage() {
  const formAction = async () => {
    "use server"
    console.log("server action");
  }
  return(
    <>
    <div className="flex  items-center justify-center mt-10">
      <form action={formAction}>
        <button className="px-4 py-2 border-2 rounded-md border-red-400">Increment</button>
      </form>
    </div>
    </>
  )
}