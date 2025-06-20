import { Outlet } from "react-router";
import { classes } from "./ErrorLayoutClasses";
import "./ErrorLayout.css";

export default function ErrorLayout() {
    return (
        <main className={classes.errorMain}>
            <div className={classes.errorContainer}>
                <Outlet />
            </div>
        </main>
    );
}
