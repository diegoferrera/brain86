import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header (){
return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <img src="/images/logo.svg" alt="brain 86"/>
      <nav>
        <a className={styles.active}>Home</a>
        <a>Enem</a>
        <a>Simulados</a>
        <a>Provas</a>
        <a>Suporte</a>
        <a>Comunidade</a>
      </nav>
      <SignInButton />
      </div>
    </header>
);
}