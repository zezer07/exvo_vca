import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormField from "../../../common/FormField/FormField";
import { HorizontalLine } from "./FormPage.style";
import { EMAIL_PATTERN, FIRSTNAME_PATTERN } from "../../../constants/patterns";
import { IformInputs } from "../../../interfaces/IFormInputs";

const FormPage = () => {
  const [emailValid, setEmailValid] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<IformInputs>();

  const formSubmitHandler: SubmitHandler<IformInputs> = (
    data: IformInputs,
    event: any
  ) => {
    // event.preventDefault();
    console.log("form submitted ✅", data);
  };

  return (
    <>
      <p>INTRODUCE YOURSELF</p>

      <HorizontalLine />

      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <FormField
          type="text"
          shrink={false}
          inputLabel="First Name"
          required={true}
          isValid={firstNameValid}
          name="firstName"
          watch={watch("firstName")}
          register={register}
          clearErrors={clearErrors}
          setError={setError}
          setValidateMethod={setFirstNameValid}
          errors={errors.firstName}
          pattern={FIRSTNAME_PATTERN}
          msgError="should have no space or numbers"
        />

        <FormField
          type="text"
          inputLabel="Email"
          required={true}
          shrink={false}
          isValid={emailValid}
          name="email"
          watch={watch("email")}
          register={register}
          errors={errors.email}
          clearErrors={clearErrors}
          setError={setError}
          setValidateMethod={setEmailValid}
          msgError="Invalid email format"
          pattern={EMAIL_PATTERN}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
          }}
        >
          <InputLabel shrink={false}>Country</InputLabel>

          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            type="select"
            defaultValue="Select"
            {...register("country")}
            renderValue={(value: string) => {
              return (
                <span style={{ color: value === "Select" ? "gray" : "black" }}>
                  {value}
                </span>
              );
            }}
          >
            <MenuItem value="France">France</MenuItem>
            <MenuItem value="Israel">Israel</MenuItem>
            <MenuItem value="Finland">Finland</MenuItem>
          </Select>
        </div>

        <div style={{ textAlign: "center" }}>
          <input type="submit" style={{ marginTop: "2rem" }} />
        </div>
      </form>
    </>
  );
};

export default FormPage;
