import { FieldError, UseFormClearErrors, UseFormRegister,UseFormSetError } from "react-hook-form";


export default interface IPropsFormField {
  required?: boolean;
  shrink?: boolean;
  type?: string;
  isValid?: boolean;
  name: string;
  inputLabel?: string;
  watch?: string;
  pattern: RegExp;
  msgError?: string;
  errors?: FieldError;
  register:  UseFormRegister<any>;
  clearErrors: UseFormClearErrors<any>;
  setValidateMethod: React.Dispatch<React.SetStateAction<boolean>>;
  setError: UseFormSetError<any>;
}
