import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    authenticationRouters,
    homeRouters,
    mainRouters,
    workspacesRouters,
} from "./config/Routers";
import {
    AuthenticationLayout,
    HomeLayout,
    MainLayout,
    WorkspacesLayout,
} from "./layouts";
import { Toaster } from "react-hot-toast";
import { Redirect } from "./utils";

function App() {
    // ARROW FUNCTION
    const renderRoute = (listRoutes) => {
        return listRoutes.map(({ path, component }, index) => {
            return <Route path={path} element={component} key={index} />;
        });
    };
    const renderRouterMain = (listRoutes) => {
        return listRoutes.map(({ path, component, listChildrenRoutes }) => {
            return (
                <Route path={path} element={component} key={path}>
                    {renderRoute(listChildrenRoutes)}
                </Route>
            );
        });
    };
    // ***********************************************************

    return (
        <>
            <Toaster position="top-center" />
            <Router>
                <Redirect>
                    <Routes>
                        {/* HOME */}
                        <Route path="/" element={<HomeLayout />}>
                            {renderRoute(homeRouters)}
                        </Route>
                        {/* AUTHENTICATION */}
                        <Route path="/auth" element={<AuthenticationLayout />}>
                            {renderRoute(authenticationRouters)}
                        </Route>
                        {/* WORKSPACES */}
                        <Route path="/workspaces" element={<WorkspacesLayout />}>
                            {renderRoute(workspacesRouters)}
                        </Route>
                        {/* MAIN */}
                        <Route path="/app" element={<MainLayout />}>
                            {renderRouterMain(mainRouters)}
                        </Route>
                        <Route path="*">
                            
                        </Route>
                    </Routes>
                </Redirect>
            </Router>
        </>
    );
}

export default App;
