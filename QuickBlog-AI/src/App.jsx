import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App=()=> {
  const { isLoggedIn, authLoading } = useAppContext();

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
          element={isLoggedIn ? <Navigate to="/Admin" replace /> : <Home/>}
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
