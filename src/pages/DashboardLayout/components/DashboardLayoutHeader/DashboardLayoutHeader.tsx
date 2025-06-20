import {
    Avatar,
    Image,
    Text,
    Title,
    useMantineTheme,
    type TitleOrder,
} from "@mantine/core";
import { getRandomTestUser } from "../../../../util/test-data/user";
import { classes } from "./DashboardLayoutHeaderClasses";
import SharedSizes from "../../../../shared/constants/SharedSizes.json";
import "./DashboardLayoutHeader.css";

const IconSize = SharedSizes.Images.LargeIconSize;
const TitleOrderSize = SharedSizes.Text.Header.MainTitle.Order as TitleOrder;
const TitleFontWeight = SharedSizes.Text.Header.MainTitle.FontWeight;
const TextSize = SharedSizes.Text.Header.Card.TextSize;

export default function DashboardLayoutHeader() {
    const theme = useMantineTheme();
    const testUser = getRandomTestUser();

    return (
        <div className={classes.headerContainer}>
            <span className={classes.logoContainer}>
                <Image w={IconSize} src="/favicon.png" alt="Portal Logo" />
                <Title order={TitleOrderSize} fw={TitleFontWeight}>
                    Portal Dashboard
                </Title>
            </span>

            <div className={classes.userInfo}>
                <Text c={theme.primaryColor} size={TextSize}>
                    {testUser.name}
                </Text>
                <Avatar
                    src={testUser.ppicUrl}
                    name={testUser.name}
                    alt={testUser.name}
                />
            </div>
        </div>
    );
}
