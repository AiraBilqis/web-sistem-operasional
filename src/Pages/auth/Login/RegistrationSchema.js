import * as Yup from "yup";

export const registrationSchema = Yup.object({
  email: Yup.string().email().required("Email id is required"),
  password: Yup.string().min(6).required("Please enter your password"),
});
