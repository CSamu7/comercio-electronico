import { useState } from "react";

export default function useForm(objForm) {
  const [form, setForm] = useState(objForm);
  const [formError, setFormError] = useState("");

  const updateField = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    //TODO: Que no pueda escribir strings en un campo de numeros, por ejemplo.
    setForm({
      ...form,
      [name]: value,
    });
  };

  const checkFields = (personalizedMessages) => {
    for (const [key, value] of Object.entries(form)) {
      if (key === "terminos") {
        setFormError("Debes aceptar los terminos y condiciones");
        return;
      }
    }
  };

  return {
    form,
    formError,
    updateField,
    setFormError,
    checkFields,
  };
}
