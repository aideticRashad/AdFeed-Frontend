import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import './App.css'
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SetMFA from "./pages/SetMFA/SetMFA";
import Home from "./pages/Home/Home";
import FileUpload from "./pages/Admin/FileUpload/FileUpload";
import Folders from "./pages/Admin/Folders/Folders";
import UserManagement from "./pages/Admin/UserManagement/UserManagement";

function App() {
  const { loading } = useSelector((state: any) => state.alerts)
  console.log(loading, 'hiii')
  return (
    <Router>
      <div className="App">
        {loading && (
          <div className="spinner-parent">
            <div className="spinner-border text-white" role="status"></div>
          </div>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Navigate to="/get-started" />} />
          <Route path="/get-started" element={<Auth />} />
          <Route path="/set-mfa" element={<SetMFA />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/upload" element={<FileUpload />} />
          <Route path="/admin/folders" element={<Folders />} />
          <Route path="/admin/users" element={<UserManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
