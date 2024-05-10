import { db } from "@/db";
import { Button } from "@nextui-org/react";
import Link from "next/link";

// refresh the cache every three seconds
// export const revalidate  = 3;

// when don't want caching at all
// export const revalidate = 0;
// export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div>
      <Button> click </Button>
    </div>
  );
}
