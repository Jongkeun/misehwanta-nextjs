import Link from "next/link";

type Props = {
  selected: boolean;
  onClick: (event: any) => void;
  text: string;
};
const HeaderElement = ({ selected, onClick, text }: Props) => {
  return (
    <Link href="/">
      <a className={selected ? "active" : ""} onClick={onClick}>
        {text}
      </a>
    </Link>
  );
};
export default HeaderElement;
