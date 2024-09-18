import Link from "next/link";

type Props = {
  id: string;
  href: string;
  iconName: string;
  title: string;
};
export default function Footer({ href, iconName, title }: Props) {
  return (
    <li>
      <Link href={href} className="flex items-center gap-4">
        <span className="text-2xl">{iconName}</span>
        <span className="text-md font-light">{title}</span>
      </Link>
    </li>
  );
}
