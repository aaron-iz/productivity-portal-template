import {
    isValidEmail,
    isValidFullName,
    isValidPassword,
    isValidUsername,
} from "../util/validations";
import { useForm } from "@mantine/form";
import Resources from "../../AuthPageResources.json";
import { classes } from "../../AuthPagesClasses";
import { Button } from "@mantine/core";
import AuthTextInput from "../AuthTextInput/AuthTextInput";

export default function RegisterTab() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            email: "",
            fullName: "",
            username: "",
            password: "",
        },

        validate: {
            email: (value) =>
                isValidEmail(value)
                    ? null
                    : Resources.Register.Email.ErrorMessage,
            fullName: (value) =>
                isValidFullName(value)
                    ? null
                    : Resources.Register.FullName.ErrorMessage,
            username: (value) =>
                isValidUsername(value)
                    ? null
                    : Resources.Register.Username.ErrorMessage,
            password: (value) =>
                isValidPassword(value)
                    ? null
                    : Resources.Register.Password.ErrorMessage,
        },
    });

    const handleRegister = (values: any) => {
        if (!form.isValid()) {
            console.log(values);
        }
    };

    return (
        <form
            className={classes.formContainer}
            onSubmit={form.onSubmit(handleRegister)}
        >
            <div className={classes.formInputsContainer}>
                <AuthTextInput
                    error={form.errors.fullName}
                    label={Resources.Register.FullName.Label}
                    placeholder={Resources.Register.FullName.Placeholder}
                    {...form.getInputProps(Resources.Register.FullName.Value)}
                />
                <AuthTextInput
                    error={form.errors.email}
                    label={Resources.Register.Email.Label}
                    placeholder={Resources.Register.Email.Placeholder}
                    infoTooltip={Resources.Register.Email.InformationTooltip}
                    {...form.getInputProps(Resources.Register.Email.Value)}
                />
                <AuthTextInput
                    error={form.errors.username}
                    label={Resources.Register.Username.Label}
                    placeholder={Resources.Register.Username.Placeholder}
                    infoTooltip={Resources.Register.Username.InformationTooltip}
                    {...form.getInputProps(Resources.Register.Username.Value)}
                />
                <AuthTextInput
                    type="password"
                    error={form.errors.password}
                    label={Resources.Register.Password.Label}
                    placeholder={Resources.Register.Password.Placeholder}
                    infoTooltip={Resources.Register.Password.InformationTooltip}
                    {...form.getInputProps(Resources.Register.Password.Value)}
                />
            </div>

            <Button type="submit" size={Resources.ContentSize}>
                {Resources.Login.SubmitButton.Label}
            </Button>
        </form>
    );
}
