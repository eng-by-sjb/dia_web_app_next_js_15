"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function Title() {
  const pathname = usePathname();

  const pathSegments = pathname.split("/");

  const pageName = pathSegments[2];
  const isPageNested = pathSegments.length > 4;

  return (
    <>
      {isPageNested ? (
        <div className="text-neutral-700 flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            className="p-0"
            onClick={() => {
              window.location.href = `/dashboard/${pageName}`;
            }}>
            <IoIosArrowBack size={24}></IoIosArrowBack>
          </Button>
          <span className="text-sm text-neutral-600 capitalize">{pageName}</span>
        </div>
      ) : (
        <h4 className="font-bold text-base capitalize">{pageName}</h4>
      )}
    </>
  );
}
