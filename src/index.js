import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home';
import { AuthLayout , Login  } from './components/index'
import Signup from './components/pages/Signup';
import AllPosts from './components/pages/AllPosts';
import AddPost from './components/pages/AddPost';
import EditPost from './components/pages/EditPost';
import Post from './components/pages/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/login',
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup/>
            </AuthLayout>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPosts/>
            </AuthLayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post/>
    },
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
