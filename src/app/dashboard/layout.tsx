import Header from "./_components/Header/Header";
import Sidebar from "./_components/sidebar/Sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

// export const metaData: Metadata = {
//   title: "Dia Dashboard",
//   description: "client app",
// };

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-dvh flex">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
