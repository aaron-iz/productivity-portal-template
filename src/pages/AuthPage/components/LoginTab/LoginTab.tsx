import { Button } from "@mantine/core";
import { classes } from "../../AuthPagesClasses";
import Resources from "../../AuthPageResources.json";
import { useForm } from "@mantine/form";
import { isValidUsername } from "../util/validations";
import AuthTextInput from "../AuthTextInput/AuthTextInput";

export default function LoginTab() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            username: "",
            password: "",
        },

        validate: {
            username: (value) =>
                isValidUsername(value)
                    ? null
                    : Resources.Login.Username.ErrorMessage,
        },
    });

    const handleLogin = (values: any) => {
        if (!form.isValid()) {
            console.log(values);
        }
    };

    return (
        <form
            onSubmit={form.onSubmit(handleLogin)}
            className={classes.formContainer}
        >
            <div className={classes.formInputsContainer}>
                <AuthTextInput
                    error={form.errors.username}
                    label={Resources.Login.Username.Label}
                    placeholder={Resources.Login.Username.Placeholder}
                    {...form.getInputProps(Resources.Login.Username.Value)}
                />
                <AuthTextInput
                    type="password"
                    error={form.errors.password}
                    label={Resources.Login.Password.Label}
                    placeholder={Resources.Login.Password.Placeholder}
                    {...form.getInputProps(Resources.Login.Password.Value)}
                />
            </div>
            <Button size={Resources.ContentSize} type="submit">
                {Resources.Login.SubmitButton.Label}
            </Button>
        </form>
    );
}
