import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Layout from './pages/Admin/Layout.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AddBlog from './pages/Admin/AddBlog.jsx';
import ListBlog from './pages/Admin/ListBlog.jsx';
import Comments from './pages/Admin/Comments.jsx';
import Login from './components/LoginAdmin/Login.jsx';
import 'quill/dist/quill.snow.css';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from '../context/AppContext.jsx';

function App() {
  const { token } = useAppContext();

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Blog/:id' element={<Blogs />} />
        <Route path='/Admin' element={token ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path='AddBlog' element={<AddBlog />} />
          <Route path='ListBlog' element={<ListBlog />} />
          <Route path='Comments' element={<Comments />} />
        </Route>
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
