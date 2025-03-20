import Layout from "../components/Layout";
import style from "./Login.module.css";
import LinkButton from "../components/buttons/LinkButton";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import useForm from "../hooks/useForm";
import ActionButton from "../components/buttons/ActionButton";

export default function Login() {
  //TODO: Crear el hook de form.
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { getUser } = useUser();
  const { addItem } = useLocalStorage();
  const { form, formError, updateField } = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const user = await getUser();

    if (user) {
      addItem("token", user.accessToken);
      navigate("/");
    } else {
      setError("Correo/Contraseña incorrecto");
    }
  };

  return (
    <Layout>
      <div className={style.mainPage}>
        <div className={style.formContainer}>
          <h2 className={style.formTitle}>Inicio de sesión</h2>
          <form
            className={style.form}
            onSubmit={onSubmitForm}
            onChange={updateField}
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={updateField}
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={form.password}
              onChange={updateField}
            />
            <LinkButton variant="btnInline">
              ¿Has olvidado tu contraseña?
            </LinkButton>
            <p
              className={`${style.formErrorMsg} ${
                error && style.formErrorActive
              }`}
            >
              {error}
            </p>
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
