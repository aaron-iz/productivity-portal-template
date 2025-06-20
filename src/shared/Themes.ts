// theme.ts
import {
    createTheme,
    rem,
    Card,
    Container,
    Paper,
    Select,
} from "@mantine/core";
import type { MantineThemeOverride } from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
    xxs: rem("200px"),
    xs: rem("300px"),
    sm: rem("400px"),
    md: rem("500px"),
    lg: rem("600px"),
    xl: rem("1400px"),
    xxl: rem("1600px"),
};

export const theme: MantineThemeOverride = createTheme({
    primaryColor: "violet",

    colors: {
        surface: [
            "#f4f4f4",
            "#e0e0e0",
            "#cfcfcf",
            "#bdbdbd",
            "#9e9e9e",
            "#616161",
            "#424242",
            "#303030",
            "#212121",
            "#121212",
        ],
        accent: [
            "#ffe6f0",
            "#ffb3d1",
            "#ff80b3",
            "#ff4d94",
            "#ff1a75",
            "#e6005c",
            "#b30047",
            "#800033",
            "#4d001f",
            "#1a000a",
        ],
        text: [
            "#f4f4f4",
            "#e0e0e0",
            "#cfcfcf",
            "#bdbdbd",
            "#9e9e9e",
            "#616161",
            "#424242",
            "#303030",
            "#212121",
            "#121212",
        ],
    },

    fontFamily: "Inter, sans-serif",
    fontSizes: {
        xs: rem("12px"),
        sm: rem("14px"),
        md: rem("16px"),
        lg: rem("18px"),
        xl: rem("20px"),
        "2xl": rem("24px"),
        "3xl": rem("30px"),
        "4xl": rem("36px"),
        "5xl": rem("48px"),
    },

    spacing: {
        "3xs": rem("4px"),
        "2xs": rem("8px"),
        xs: rem("10px"),
        sm: rem("12px"),
        md: rem("16px"),
        lg: rem("20px"),
        xl: rem("24px"),
        "2xl": rem("28px"),
        "3xl": rem("32px"),
    },

    components: {
        Container: Container.extend({
            vars: (_, { size, fluid }) => ({
                root: {
                    "--container-size": fluid
                        ? "100%"
                        : size !== undefined && size in CONTAINER_SIZES
                        ? CONTAINER_SIZES[size]
                        : rem(size),
                },
            }),
        }),

        Paper: Paper.extend({
            defaultProps: {
                p: "md",
                shadow: "xl",
                radius: "md",
                withBorder: true,
                bg: "surface.6",
            },
        }),

        Card: Card.extend({
            defaultProps: {
                p: "xl",
                shadow: "xl",
                radius: "var(--mantine-radius-default)",
                withBorder: true,
                bg: "surface.6",
            },
        }),

        Select: Select.extend({
            defaultProps: {
                checkIconPosition: "right",
            },
        }),
    },

    other: {
        style: "custom-dark-theme",
    },
});
