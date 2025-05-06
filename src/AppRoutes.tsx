import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import HomePage from './pages/HomePage'
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageSupplyshedPage from "./pages/ManageSupplyshedPage";

const AppRoutes=()=>{
    return(
        <Routes>
            <Route path='/' element={<Layout showHero> 
            <HomePage />            
            </Layout>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route element={<ProtectedRoute />}>
                <Route
                    path="/user-profile"
                    element={
                        <Layout>
                    <UserProfilePage />
                    </Layout>
                        }
                        />
                <Route
                    path="/manage-supplyshed"
                    element={
                        <Layout>
                        <ManageSupplyshedPage />
                        </Layout>
                    }
                    />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;