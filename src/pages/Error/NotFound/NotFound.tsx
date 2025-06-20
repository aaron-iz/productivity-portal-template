import { Title, Text } from "@mantine/core";
import { BiSolidConfused } from "react-icons/bi";
import * as ErrorConstants from "../ErrorContants";

export default function NotFound() {
    return (
        <>
            <Title
                order={ErrorConstants.ErrorTitleOrder}
                fw={ErrorConstants.ErrorTitleFontWeight}
                size={ErrorConstants.ErrorTitleFontSize}
                style={{ display: "flex", alignItems: "center" }}
            >
                <BiSolidConfused style={{ marginRight: "1rem" }} />
                Not Found
            </Title>
            <Text
                size={ErrorConstants.ErrorBodyFontSize}
                fw={ErrorConstants.ErrorBodyFontWeight}
            >
                The page you have requested for does not exist.
            </Text>
        </>
    );
}
