import Layout from "../components/Layout";
import styles from "./Login.module.css";
import LinkButton from "../components/buttons/LinkButton";
import ActionButton from "../components/buttons/ActionButton";
import MessageError from "../components/form/MessageError";
import Loader from "../components/Loader";

import { useUser } from "../hooks/useUser";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function Login() {
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, [isLoading]);

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
        message: error.msg,
      });
    }
  };

  return (
    <Layout>
      <div className={styles.mainPage}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Inicio de sesión</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
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
              className={styles.forgetPasswordLink}
            >
              ¿Has olvidado tu contraseña?
            </LinkButton>

            <div className={styles.formState}>
              {isLoading && <Loader className={styles.loader}></Loader>}

              {errors.service && !isLoading && (
                <MessageError variant="withBg">
                  {errors.service.message}
                </MessageError>
              )}
            </div>

            <ActionButton
              className={styles.btnLogIn}
              variant="btnWithBg"
              width="100%"
              type="submit"
              onClick={() => clearErrors("service")}
            >
              Iniciar sesión
            </ActionButton>
            <div className={styles.formRegister}>
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
