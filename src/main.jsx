import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/userDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Comments from './components/Comments/Comments.jsx';
import CommentDetails from './components/CommentDetails/CommentDetails.jsx';
import Todos from './components/Todos/Todos.jsx';
import TodoDetails from './components/TodoDetails/TodoDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path: '/user/:person',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.person}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:people',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.people}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: '/comments',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/comments'),
        element:<Comments></Comments>
      },
      {
        path:'/comment/:commentAll',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentAll}`),
        element: <CommentDetails></CommentDetails>
      },
      {
        path:'/todos',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/todos'),
        element: <Todos></Todos>
      },
      {
        path: '/todo/:personal',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/todos/${params.personal}`),
        element: <TodoDetails></TodoDetails>
      }
    ]
  },
  
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
