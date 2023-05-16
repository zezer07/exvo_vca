import { InputLabel, TextField } from "@mui/material";
import IPropsFormField from "../../interfaces/IPropsFormField";
import { validInput } from "../../utils/validInput";

const FormField = ({
  type,
  required,
  shrink,
  name,
  inputLabel,
  isValid,
  watch,
  errors,
  pattern,
  msgError,
  register,
  clearErrors,
  setValidateMethod,
  setError,
}: IPropsFormField) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <InputLabel
        shrink={shrink}
        required={required}
        style={{
          color: isValid ? "green" : "",
        }}
      >
        {inputLabel}
      </InputLabel>

      <TextField
        id="outlined-basic=1"
        variant="outlined"
        style={{ width: "100%" }}
        required={required}
        type={type}
        {...register(name, {
          required,
          pattern,
          async onChange(e) {
            clearErrors(name);
            setValidateMethod(validInput(e.target.value, pattern));
          },
          onBlur() {
            if (!isValid) {
              setError(name, {
                type: "custom",
                message: msgError,
              });
            }
          },
        })}
      />

      {errors && (
        <p style={{ color: "red", fontSize: "1rem" }}>
          {watch?.length ? errors.message : ""}
        </p>
      )}
    </div>
  );
};

export default FormField;
