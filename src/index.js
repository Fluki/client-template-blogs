import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import PostsPage from './pages/PostsPage';
import CreatePage from './pages/CreatePage.js';
import DeletePage from './pages/DeletePage';
import UpdatePage from './pages/UpdatePage.js';
import AdminPage from './pages/AdminPage.js';
import SinglePostPage from './pages/SinglePostPage';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PostsPage />} />
        <Route path="/post/:id" element={<SinglePostPage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route path="/admin/create" element={<CreatePage />} />
        <Route path="/admin/delete" element={<DeletePage />} />
        <Route path="/admin/update/:id" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
