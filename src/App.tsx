import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users, { usersLoader } from "./pages/Users";
import User from "./pages/User";
import HeaderLayout from "./layouts/HeaderLayout";
import FormPage from "./pages/Form";
import NotFoundPage from "./pages/404";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="add-user" element={<FormPage />} />

      <Route path="users">
        <Route index element={<Users />} loader={usersLoader} />
        <Route path=":id" element={<User />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
