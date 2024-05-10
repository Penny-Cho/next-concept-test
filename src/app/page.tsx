import { db } from "@/db";
import { Button } from "@nextui-org/react";
import Link from "next/link";

// refresh the cache every three seconds
// export const revalidate  = 3;

// when don't want caching at all
// export const revalidate = 0;
// export const dynamic = "force-dynamic";

export default async function Home() {
  // const snippets = await db.snippet.findMany();

  // const renderedSnippets = snippets.map((snippet) => {
  //   return (
  //     <Link
  //       href={`/snippets/${snippet.id}`}
  //       className="flex justify-between items-center p-2 border rounded"
  //       key={snippet.id}
  //     >
  //       <div>{snippet.title}</div>
  //       <div>view</div>
  //     </Link>
  //   );
  // });

  return (
    <div>
      <Button> click </Button>
    </div>
    // <div>
    //   <div className="flex m-2 justify-between items-center">
    //     <h1 className="text-xl font-bold">Snippets</h1>
    //     <Link href="/snippets/new" className="border p-2 rounded">
    //       new
    //     </Link>
    //   </div>
    //   <div className="flex flex-col gap-2">{renderedSnippets}</div>
    // </div>
  );
}
