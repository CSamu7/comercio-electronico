import ActionButton from "../components/buttons/ActionButton";
import LinkButton from "../components/buttons/LinkButton";
import FormInput from "../components/form/FormInput";
import MessageError from "../components/form/MessageError";
import Select from "../components/form/Select";
import Layout from "../components/Layout";
import { useUser } from "../hooks/useUser";
import styles from "./Register.module.css";
import states from "../../estados.json";
import towns from "../../estados-municipios.json";
import { useForm } from "react-hook-form";

export default function Register() {
  const { addUser } = useUser();

  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className={styles.mainPage}>
        <h2 className={styles.title}>Crea tu cuenta</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles.subtitle}>Datos personales</h3>
          <div className={styles.formGroup}>
            <FormInput label="Nombre" register={register} required></FormInput>
            <FormInput
              label="Apellido Paterno"
              register={register}
              required
            ></FormInput>
            <FormInput
              register={register}
              required
              label="Apellido Materno"
            ></FormInput>

            <Select label="Estado" list={states} register={register}></Select>
            <Select label="Municipio" register={register}></Select>
            <FormInput label="Calle" register={register} required></FormInput>
            <FormInput
              label="Codigo Postal"
              width={100}
              required
              register={register}
            ></FormInput>
          </div>

          <h3 className={styles.subtitle}>Cuenta</h3>
          <div className={styles.formGroup}>
            <FormInput
              label="Correo"
              type="email"
              register={register}
              required
            ></FormInput>
            <FormInput
              label="Contraseña"
              type="password"
              register={register}
              required
            ></FormInput>
            <FormInput
              label="Terminos y condiciones"
              required
              register={register}
              type="checkbox"
            ></FormInput>
            {/* <MessageError condition={formError}>{formError}</MessageError> */}
          </div>

          <ActionButton
            className={styles.btnSubmit}
            type="submit"
            variant="btnWithBg"
          >
            Registrarse
          </ActionButton>
        </form>
      </div>
    </Layout>
  );
}
