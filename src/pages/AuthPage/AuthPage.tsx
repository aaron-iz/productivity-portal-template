import { Tabs } from "@mantine/core";
import "./AuthPage.css";
import { classes } from "./AuthPagesClasses";
import Resources from "./AuthPageResources.json";
import LoginTab from "./components/LoginTab/LoginTab";
import RegisterTab from "./components/RegisterTab/RegisterTab";

export default function AuthPage() {
    return (
        <div className={classes.authPage}>
            <div className={classes.tabbedFormsContainer}>
                <Tabs
                    defaultValue={Resources.Tabs.Login.Value}
                    style={{ height: "100%" }}
                >
                    <Tabs.List>
                        <Tabs.Tab
                            className={classes.tabLabel}
                            value={Resources.Tabs.Login.Value}
                            fz={Resources.ContentSize}
                        >
                            {Resources.Tabs.Login.Title}
                        </Tabs.Tab>
                        <Tabs.Tab
                            className={classes.tabLabel}
                            value={Resources.Tabs.Register.Value}
                            fz={Resources.ContentSize}
                        >
                            {Resources.Tabs.Register.Title}
                        </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel
                        value={Resources.Tabs.Login.Value}
                        style={{ height: "100%" }}
                    >
                        <LoginTab />
                    </Tabs.Panel>
                    <Tabs.Panel
                        value={Resources.Tabs.Register.Value}
                        style={{ height: "100%" }}
                    >
                        <RegisterTab />
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
}
