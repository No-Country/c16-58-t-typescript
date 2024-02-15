import { useSession, signOut } from "next-auth/react";
import PrimaryButton from "./EditButton";
import { useRouter } from "next/router";

const AuthButton = () => {
    const {data: session, status} = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <p className="text-stone-700">Cargando...</p>;
      }

      if (session) {
        return (
          <>
            Bienvenido {session.user?.username} <br />
            <PrimaryButton
            onClickFunction={() => signOut()} title='Salir'
            />
          </>
        );
      }
      return (
        <>
        No identificado <br />
        <PrimaryButton
        onClickFunction={() => router.push('/login')}
        title='Log in o registro'
        />
      </>
      )
}
export default AuthButton;