import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Homepage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
import PostDetailsPage from './pages/PostDetailsPage.jsx';
import Layout from './components/Layout.jsx';

const router = createBrowserRouter([
  {
  path: '/',
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/create',
      element: <CreatePostPage />,
    },
    {
      path: '/post/:id',
      element: <PostDetailsPage />,
    },
  ],
},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
