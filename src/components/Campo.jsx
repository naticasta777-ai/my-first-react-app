import { useId } from "react";
import "./Formulario.css";

export function Campo({ etiqueta, registro, error, ayuda, ...atributos }) {
  const id = useId();
  const idAyuda = `${id}-ayuda`;
  const idError = `${id}-error`;
  const descripcion = [ayuda && idAyuda, error && idError].filter(Boolean).join(" ");

  return (
    <div className="campo">
      <label htmlFor={id}>{etiqueta}</label>
      {ayuda && (
        <p id={idAyuda} className="campo-ayuda">
          {ayuda}
        </p>
      )}
      <input
        id={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={descripcion || undefined}
        {...registro}
        {...atributos}
      />
      {error && (
        <p id={idError} className="campo-error">
          {error.message}
        </p>
      )}
    </div>
  );
}