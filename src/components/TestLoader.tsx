import { Loader, Notification, Text, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";

const twoMinutes = 1000 * 60 * 2;
const fiveSeconds = 1000 * 5;

export function TestLoader() {
    const theme = useMantineTheme();
    const [loading, setLoading] = useState(true);
    const [showNotification, setShowNotification] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, fiveSeconds);
        setTimeout(() => {
            setShowNotification(false);
        }, twoMinutes);
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                padding: "1rem",
                borderRadius: "8px",
            }}
        >
            {loading && <Loader size={"xl"} />}
            {!loading && showNotification && (
                <Notification
                    color="red"
                    bg={theme.colors.surface[4]}
                    title="Something went wrong while loading the page"
                    onClose={() => setShowNotification(false)}
                >
                    <Text c={theme.colors.text[9]}>
                        We're sorry but your request could not be completed.
                    </Text>
                </Notification>
            )}
        </div>
    );
}
