import Layout from "../components/Layout";
import style from "./Login.module.css";
import LinkButton from "../components/buttons/LinkButton";
import ActionButton from "../components/buttons/ActionButton";
import MessageError from "../components/form/MessageError";

import { useUser } from "../hooks/useUser";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Login() {
  //TODO: Crear el hook de form.
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const { getUser } = useUser();
  const { addItem } = useLocalStorage();

  const onSubmitForm = async (data) => {
    const user = {
      email: data.email,
      passw: data.password,
    };

    try {
      const token = await getUser(user);

      addItem("token", token.acccessToken);
      navigate("/");
    } catch (error) {
      setError("service", {
        message: error.message,
      });
    }
  };

  return (
    <Layout>
      <div className={style.mainPage}>
        <div className={style.formContainer}>
          <h2 className={style.formTitle}>Inicio de sesión</h2>
          <form className={style.form} onSubmit={handleSubmit(onSubmitForm)}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Ingresa tu correo" },
              })}
            />

            {errors.email && (
              <MessageError variant="noBg">{errors.email.message}</MessageError>
            )}
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: { value: true, message: "Ingresa tu contraseña" },
              })}
            />
            {errors.password && (
              <MessageError variant="noBg">
                {errors.password.message}
              </MessageError>
            )}

            <LinkButton
              variant="btnInline"
              className={style.forgetPasswordLink}
            >
              ¿Has olvidado tu contraseña?
            </LinkButton>

            {errors.server && (
              <MessageError variant="withBg">
                {errors.server.message}
              </MessageError>
            )}

            <ActionButton
              className={style.btnLogIn}
              variant="btnWithBg"
              width="100%"
              type="submit"
            >
              Iniciar sesión
            </ActionButton>
            <div className={style.formRegister}>
              <p>¿No tienes una cuenta?</p>
              <LinkButton variant="btnInline" url="/registro">
                Registrate aquí
              </LinkButton>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
