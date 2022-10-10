import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./user/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import DashboardSeller from "./user/DashboardSeller";
import NewHotel from "./hotels/NewHotel";

function App() {
    return (
        <div className="App">
            <ToastContainer position="top-center" />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute redirectTo={"/login"}>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dashboard/seller"
                    element={
                        <PrivateRoute redirectTo={"/login"}>
                            <DashboardSeller />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/hotels/new"
                    element={
                        <PrivateRoute redirectTo={"/login"}>
                            <NewHotel />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
