import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavDesktopItem({ url, name }: { url: string; name: string }) {
  const pathname = usePathname();
  return (
    <li className={pathname == url ? 'nav-item active' : 'nav-item'}>
      <Link href={url}>{name}</Link>
    </li>
  );
}
