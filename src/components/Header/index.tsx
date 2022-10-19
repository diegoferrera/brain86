
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

import { ActiveLink } from '../ActiveLink';

export function Header (){
  
return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <img src="/images/logo.svg" alt="brain 86"/>
      <nav>
        <ActiveLink activeClassName={styles.active} href="/">
          <a>Home</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/enem">
          <a>Enem</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/simulados">
          <a>Simulados</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/provas">
          <a>Provas</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/posts">
          <a>Posts</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/comunidade">
          <a>Comunidade</a>
        </ActiveLink>
      </nav>
      <SignInButton />
      </div>
    </header>
);
}