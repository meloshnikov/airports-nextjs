import cn from 'classnames';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/next.svg" width={60} height={60} alt="logo" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path} className={cn(styles.link, pathname === path ? styles.active : '')}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
