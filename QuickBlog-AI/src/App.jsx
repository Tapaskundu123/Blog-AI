import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Layout from './pages/Admin/Layout.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AddBlog from './pages/Admin/AddBlog.jsx';
import ListBlog from './pages/Admin/ListBlog.jsx';
import Comments from './pages/Admin/Comments.jsx';
import LoginAdmin from './components/LoginAdmin/Login.jsx';
import LogoutAdmin from './components/LoginAdmin/Logout.jsx';
import 'quill/dist/quill.snow.css';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/AppContext.jsx';
import {ProtectedRoute} from './components/ProtectedRoute.jsx';

function App() {
  const { isLoggedIn, authLoading } = useAppContext();
  const navigate = useNavigate();

  if (authLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Toaster />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={isLoggedIn ? navigate("/Admin", { replace: true }) : <Home />}
        />
        <Route path="/Blog/:id" element={<Blogs />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/logout" element={<LogoutAdmin />} />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/Admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="AddBlog" element={<AddBlog />} />
            <Route path="ListBlog" element={<ListBlog />} />
            <Route path="Comments" element={<Comments />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
