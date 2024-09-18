"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UsersGroupRounded,
  Calendar,
  BagCheck,
  ChatLine,
  ChartSquare,
  User,
  AddSquare,
  Settings,
  Logout2,
} from "solar-icon-set";

type Props = {
  id: string;
  href: string;
  iconName: string;
  title: string;
};

const iconsMap = {
  overview: ChartSquare,
  brands: BagCheck,
  calendar: Calendar,
  talent: UsersGroupRounded,
  drafts: AddSquare,
  messages: ChatLine,
  profile: User,
  settings: Settings,
  logout: Logout2,
};

export default function NavItem({ href, title, iconName }: Props) {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  const Icon = iconsMap[iconName as keyof typeof iconsMap];

  //todo: check transitions
  return (
    <li className="h-[3.5625rem] mb-2 text-md font-light max-w-4xl mx-auto p-2 flex items-center">
      <Link
        className={`p-2 h-10 text-center flex w-full rounded-lg transition-all duration-200 ease-linear ${
          isActive ? "bg-neutral-500" : ""
        }`}
        href={href}>
        <span className="flex items-center gap-3 text-center">
          <span className="flex items-center ml-0">
            {Icon ? (
              <Icon
                size={27}
                iconStyle={`${isActive ? "Bold" : "Outline"}`}
                className="text-center"
              />
            ) : null}
          </span>
          <span className="tracking-[0.01em]">{title}</span>
        </span>
      </Link>
    </li>
  );
}
