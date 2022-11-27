import Image from 'next/image';
import './SidebarRow.scss';

type Props = {
  title: string;
  src: string;
};

export default function SidebarRow({ title, src }: Props) {
  return (
    <div className="menu">
      <Image src={src} alt="icon" width="25" height="25" />
    </div>
  );
}
