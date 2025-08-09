import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Layout from './pages/Admin/Layout.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AddBlog from './pages/Admin/AddBlog.jsx';
import ListBlog from './pages/Admin/ListBlog.jsx';
import Comments from './pages/Admin/Comments.jsx';
import LoginAdmin from './components/LoginAdmin/Login.jsx';
import LogoutAdmin  from './components/LoginAdmin/Logout.jsx';
import 'quill/dist/quill.snow.css';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from '../context/AppContext.jsx';

function App() {
  const { isLoggedIn, authLoading } = useAppContext();

  if (authLoading) {
    return <div>Loading...</div>; // Or a better loader/spinner component
  }

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Blog/:id' element={<Blogs />} />
        <Route path='/Admin' element={authLoading ? <div>Loading...</div> : isLoggedIn ? <Layout /> : <LoginAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path='AddBlog' element={<AddBlog />} />
          <Route path='ListBlog' element={<ListBlog />} />
          <Route path='Comments' element={<Comments />} />
        </Route>
        <Route path='/login' element={<LoginAdmin />} />
        <Route path='/logout' element={<LogoutAdmin/>}/>
      </Routes>
    </div>
  );
}

export default App;