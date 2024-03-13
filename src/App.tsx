import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RegisterUser } from "./components/RegisterUser";
import { LoginUser } from "./components/LoginUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>This is the landing page</p>,
  },
  {
    path: "/register",
    element: <RegisterUser />,
  },
  {
    path: "/login",
    element: <LoginUser />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
