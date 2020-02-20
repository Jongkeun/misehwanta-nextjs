import Link from "next/link";

type Props = {
  href: string;
  selected: boolean;
  onClick: (event: any) => void;
  text: string;
};
const HeaderElement = ({ href, selected, onClick, text }: Props) => {
  return (
    <Link href={href}>
      <a className={selected ? "active" : ""} onClick={onClick}>
        {text}
      </a>
    </Link>
  );
};
export default HeaderElement;
