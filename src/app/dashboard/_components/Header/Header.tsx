import { Input } from "@/components/ui/input";
import { BellBing, NotificationUnreadLines, ArrowLeft } from "solar-icon-set";
import Title from "./Title";

function Header() {
  return (
    <header className="flex justify-between items-center h-[4.5rem] gap-10 p-4 border-b">
      <Title></Title>

      <div className="flex items-center gap-x-2 mr-4">
        <Input type="search" placeholder="Search" isShortcutKey={true} />
        <NotificationUnreadLines size={20} />
      </div>
    </header>
  );
}
export default Header;
