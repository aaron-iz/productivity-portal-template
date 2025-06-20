import { TextInput, Tooltip, type TextInputProps } from "@mantine/core";
import Resources from "../../AuthPageResources.json";
import { GoInfo } from "react-icons/go";

export type AuthTextInputProps = TextInputProps & {
    infoTooltip?: string;
};

export default function AuthTextInput(props: AuthTextInputProps) {
    const { infoTooltip, ...restTextInputProps } = props;

    const getRightSection = () => {
        if (infoTooltip) {
            return (
                <Tooltip withArrow label={infoTooltip}>
                    <GoInfo />
                </Tooltip>
            );
        }

        return null;
    };

    return (
        <TextInput
            size={props.size ?? Resources.ContentSize}
            required={restTextInputProps.required ?? true}
            inputSize={props.inputSize ?? Resources.ContentSize}
            withAsterisk={restTextInputProps.withAsterisk ?? true}
            labelProps={restTextInputProps.labelProps ?? { mb: "xs" }}
            rightSection={restTextInputProps.rightSection ?? getRightSection()}
            {...restTextInputProps}
        />
    );
}
