import { Route, Routes } from "react-router";
import DashboardLayout from "./pages/DashboardLayout/DashboardLayout";
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import { MantineProvider } from "@mantine/core";
import { theme } from "./shared/Themes";
import ErrorLayout from "./pages/Error/ErrorLayout/ErrorLayout";
import NotFound from "./pages/Error/NotFound/NotFound";

const Paths = {
    Dashboard: "/dashboard",
    Auth: "/auth",
    All: "*",
};

function App() {
    return (
        <MantineProvider theme={theme}>
            <Routes>
                <Route path={Paths.Auth} element={<AuthPage />} />
                <Route path={Paths.Dashboard} element={<DashboardLayout />}>
                    <Route index element={<div>Loading...</div>} />
                </Route>
                <Route path={Paths.All} element={<ErrorLayout />}>
                    <Route path={Paths.All} element={<NotFound />} />
                </Route>
            </Routes>
        </MantineProvider>
    );
}

export default App;
