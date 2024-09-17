import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AdminDashbordLayout, AdminDashbord, Request, Staf, Company, Item, Transaction, Vehicle, Route, AddRoute, EditRoute } from './pages/index';


function App() {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <AdminDashbordLayout />,
      children: [
        {
          index: true,
          element: <AdminDashbord />,
        },
        {
          path: "/admin/request",
          element: <Request />,
        },
        {
          path: "/admin/route",
          element: <Route />,
        },
        {
          path: "/admin/staf",
          element: <Staf />,
        },
        {
          path: "/admin/company",
          element: <Company />,
        },
        {
          path: "/admin/transaction",
          element: <Transaction />,
        },
        {
          path: "/admin/vehicle",
          element: <Vehicle />,
        },
        {
          path: "/admin/item",
          element: <Item />,
        },
        {
          path: "/admin/request/add-route",
          element: <AddRoute />,
        },
        {
          path: "/admin/editRoute",
          element: <EditRoute/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;


/*import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminDashbordLayout from './pages/AdminDashbordLayout'
import Dashbord from './pages/Dashbord'
import Request from './pages/Request'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="admin" element={<AdminDashbordLayout/>}>
          <Route index element={<Dashbord/>}/>
          <Route path='admin/request' element={<Request/>}/>
        </Route>
      </Routes>
    </Router>
    
    
  );
}

export default App;*/
