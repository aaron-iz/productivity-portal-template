import { Outlet } from "react-router";
import { classes } from "./DashboardLayoutClasses";
import "./DashboardLayout.css";
import DashboardLayoutHeader from "./components/DashboardLayoutHeader/DashboardLayoutHeader";
import DashboardLayoutNavigation, {
    type NavigationItem,
} from "./components/DashboardLayoutNavigation/DashboardLayoutNavigation";
import { TestLoader } from "../../components/TestLoader";

export type DashboardLayoutProps = {
    navItems?: NavigationItem[];
};

export default function DashboardLayout({ navItems }: DashboardLayoutProps) {
    return (
        <div className={classes.verticalContainer}>
            <header className={classes.dashboardHeader}>
                <DashboardLayoutHeader />
            </header>
            <div className={classes.horizontalContainer}>
                <nav className={classes.dashboardNav}>
                    <DashboardLayoutNavigation items={navItems} />
                </nav>
                <main className={classes.dashboardMain}>
                    <Outlet />
                    <TestLoader />
                </main>
            </div>
        </div>
    );
}
