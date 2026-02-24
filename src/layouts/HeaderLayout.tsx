import { NavLink, Outlet } from "react-router-dom";

function HeaderLayout() {
  return (
    <>
      <header className="bg-blue-300">
        <nav className="container mx-auto px-4 flex items-center justify-center text-white font-bold gap-x-10 py-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="add-user">add user</NavLink>
          <NavLink to="users">All Users</NavLink>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-10">
        <Outlet />
      </main>
    </>
  );
}

export default HeaderLayout;
