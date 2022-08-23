import { FaGooglePlus } from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './styles.module.scss';

export function SignInButton() {
 const session = useSession();

  return session.status === "authenticated" ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}>
      <FaGooglePlus color="#adc946" />
      {session.data.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>

  ) : (
    <button
    type="button"
    className={styles.signInButton}
    onClick={() => signIn('google')}
    >
      <FaGooglePlus color="#55a7c9" />
      Entrar com Gmail
    </button>
  );
}