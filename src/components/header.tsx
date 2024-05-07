import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="font-bond text-2xl" href="/">
          AAA
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/snippets/new">new</Link>
        </div>
      </nav>
    </div>
  );
}
