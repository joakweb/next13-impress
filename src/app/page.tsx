import Link from "next/link";

export default function Home() {
  return <>
    <header className="flex justify-between mb-4 items-center">
      <h1 className="text-2xl">Todos</h1>
      <Link href="/new" className="border border-slate-300 
        text-slate-300 px-2 py-1 rounded hover:bg-slate-700
        focus-within:bg-slate-700 outline-none">New</Link>
    </header>
    <ul></ul>
  </>
}