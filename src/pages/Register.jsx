import ActionButton from "../components/buttons/ActionButton";
import FormInput from "../components/form/FormInput";
import MessageError from "../components/form/MessageError";
import Select from "../components/form/Select";
import Layout from "../components/Layout";
import { useLocations } from "../hooks/useLocations";
import { useUser } from "../hooks/useUser";
import styles from "./Register.module.css";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { getStates, getMunicipalities } = useLocations();
  const { addUser } = useUser();

  const states = getStates();
  const municipalities = getMunicipalities(watch("Estado"));

  const onSubmit = (data) => {
    try {
      addUser(data);
    } catch (error) {}
  };

  const errorsList = Object.entries(errors);

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

            <Select
              label="Estado"
              list={states}
              register={register}
              required
            ></Select>
            <Select
              label="Municipio"
              required
              list={municipalities}
              register={register}
            ></Select>
            <FormInput label="Calle" register={register} required></FormInput>
            <FormInput
              label="Codigo Postal"
              width={100}
              maxLength={5}
              minLength={5}
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
              label="Acepto terminos y condiciones"
              required
              name="Terminos y condiciones"
              register={register}
              type="checkbox"
            ></FormInput>
            {errorsList.length > 0 && (
              <MessageError variant="withBg">
                {errorsList[0][1].message}
              </MessageError>
            )}
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
