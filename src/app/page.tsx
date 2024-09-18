import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-dvh w-dvw">
      <Button>
        <Link href="/dashboard/brands">Go to Dashboard</Link>
      </Button>
    </main>
  );
}
