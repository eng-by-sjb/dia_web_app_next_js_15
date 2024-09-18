import { navItems, footerItems } from "@/data/data";
import NavItem from "./NavItem";
import { Minimize } from "solar-icon-set";

const Sidebar = () => {
  return (
    <aside className="h-screen w-[248px] flex justify-between flex-col bg-primary text-primary-foreground">
      <div className="">
        <div className="h-[4.18rem] p-4 flex justify-between items-center mb-7">
          <h1 className="text-2xl font-bold leading-extra-loose tracking-widest">DIA</h1>
          <button className="transition duration-300 ease-in-out hover:scale-105 ">
            <Minimize size={23} />
          </button>
        </div>

        <nav className="h-auto">
          <ul className="py-2">
            {navItems.map((item) => {
              return <NavItem key={item.id} {...item} />;
            })}
          </ul>
        </nav>
      </div>

      <footer className="h-[13.6rem] bg-primary mb-6 py-2 border-t border-neutral-500 ">
        <ul>
          {footerItems.map((item) => {
            return <NavItem key={item.id} {...item} />;
          })}
        </ul>
      </footer>
    </aside>
  );
};
export default Sidebar;
