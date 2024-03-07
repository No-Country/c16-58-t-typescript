"use client";

import { useSession, signOut } from "next-auth/react";
import PrimaryButton from "./PrimaryButton";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p className="text-stone-700">Cargando...</p>;
  }

  if (session) {
    return (
      <>
        Bienvenido {session.user?.username} <br />
        <PrimaryButton onClickFunction={() => signOut()} title="Salir" />
      </>
    );
  }
  return (
    <div>
      <h1 className="text-xs text-white">No identificado</h1>
      <PrimaryButton
        onClickFunction={() => router.push("/createUser")}
        title="Log in o registro"
      />
    </div>
  );
};
export default AuthButton;
