import { PostUserInterface } from "@/types/Requests/types";

const createUser = async (
  sessionToken: string | undefined,
  data: PostUserInterface,
) => {
  if (sessionToken)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionToken,
          },
          body: JSON.stringify(data),
        },
      );

      if (response.status == 200) {
        window.alert("Usuario creado exitosamente");
      }
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error);
      } else {
        window.alert("Error desconocido al crear el usuario");
      }
    }
};

export default createUser;
