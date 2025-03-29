import Layout from "../components/Layout";
import style from "./Login.module.css";
import LinkButton from "../components/buttons/LinkButton";
import ActionButton from "../components/buttons/ActionButton";
import MessageError from "../components/form/MessageError";
import Loader from "../components/Loader";

import { useUser } from "../hooks/useUser";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Login() {
  //TODO: Crear el hook de form.
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const { auth } = useUser();
  const { addItem } = useLocalStorage();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = async (data) => {
    setIsLoading(true);

    const user = {
      email: data.email,
      passw: data.password,
    };

    try {
      const { token } = await auth(user);

      addItem("token", token);
      navigate("/");
    } catch (error) {
      setError("service", {
        message: error.message,
      });
    } finally {
      setIsLoading(false);
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

            {isLoading && <Loader className={style.loader}></Loader>}

            {errors.service && (
              <MessageError variant="withBg">
                {errors.service.message}
              </MessageError>
            )}

            <ActionButton
              className={style.btnLogIn}
              variant="btnWithBg"
              width="100%"
              type="submit"
              onClick={() => clearErrors("service")}
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
