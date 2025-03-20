import ActionButton from "../components/buttons/ActionButton";
import LinkButton from "../components/buttons/LinkButton";
import FormInput from "../components/form/FormInput";
import MessageError from "../components/form/MessageError";
import Select from "../components/form/Select";
import Layout from "../components/Layout";
import useForm from "../hooks/useForm";
import { useUser } from "../hooks/useUser";
import styles from "./Register.module.css";
import states from "../../estados.json";
import towns from "../../estados-municipios.json";

export default function Register() {
  const { addUser } = useUser();

  const { form, updateField, formError, setFormError, checkFields } = useForm({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    estado: "",
    municipio: "",
    calle: "",
    codigoPostal: "",
    correo: "",
    contrasenia: "",
    terminos: false,
  });

  const sendForm = (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.terminos) {
      setFormError("Debes aceptar los terminos y condiciones");
    }
  };

  console.log(form.estado);
  console.log("Ciudad de Mexico" === form.estado);

  return (
    <Layout>
      <div className={styles.mainPage}>
        <h2 className={styles.title}>Crea tu cuenta</h2>
        <form className={styles.form} onSubmit={sendForm}>
          <h3 className={styles.subtitle}>Datos personales</h3>
          <div className={styles.formGroup}>
            <FormInput
              label="Nombre"
              handleUpdate={updateField}
              value={form.nombre}
              required
            ></FormInput>
            <FormInput
              label="Apellido Paterno"
              required
              handleUpdate={updateField}
            ></FormInput>
            <FormInput
              handleUpdate={updateField}
              value={form.apellidoMaterno}
              required
              label="Apellido Materno"
            ></FormInput>

            <Select
              label="Estado"
              name="estado"
              handleUpdate={updateField}
              list={states}
              onChange={updateField}
            ></Select>
            <Select
              label="Municipio"
              handleUpdate={updateField}
              list={towns[form.estado]}
            ></Select>
            <FormInput
              label="Calle"
              handleUpdate={updateField}
              required
            ></FormInput>
            <FormInput
              label="Codigo Postal"
              width={100}
              value={form.codigoPostal}
              handleUpdate={updateField}
              required
            ></FormInput>
          </div>

          <h3 className={styles.subtitle}>Cuenta</h3>
          <div className={styles.formGroup}>
            <FormInput
              label="Correo"
              type="email"
              handleUpdate={updateField}
              value={form.correo}
              required
            ></FormInput>
            <FormInput
              label="Contraseña"
              name="contrasenia"
              type="password"
              handleUpdate={updateField}
              value={form.contrasenia}
              required
            ></FormInput>
            <FormInput
              label={
                <>
                  Acepto &nbsp;
                  <LinkButton variant="btnInline" url="/terminos-y-condiciones">
                    Terminos y condiciones
                  </LinkButton>
                </>
              }
              name="terminos"
              required
              handleUpdate={updateField}
              checked={form.terminos}
              type="checkbox"
            ></FormInput>
            <MessageError condition={formError}>{formError}</MessageError>
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
