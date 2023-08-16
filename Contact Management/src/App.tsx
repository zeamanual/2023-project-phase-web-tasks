import React from 'react';
import './App.css';
import Home, { contactsLoader } from './pages/home/home';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/layout';
import ContactForm, {  } from './pages/contactForm/contactForm';
import ContactDetail from './pages/contactDetail/contactDetail';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout></Layout>}>
//           <Route index loader={contactsLoader} element={<Home></Home>} />
//           <Route path='new' element={<ContactForm></ContactForm>} />
//           <Route path='detail/:id' element={<ContactDetail></ContactDetail>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
function App() {

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "",
          loader:contactsLoader,
          element: <Home />,
        },
        {
          path: "edit/:id",
          // action:contactAction,
          element: <ContactForm/>,
        },
        {
          path: "add",
          // action:contactAction,
          element: <ContactForm/>,
        },
        {
          path: "/contacts/:id",
          element: <ContactDetail />,
        },
      ],
    },

  ])
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
