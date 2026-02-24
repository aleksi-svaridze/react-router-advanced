import type { IUsers } from "../interfaces/Users.interface";
import { Link, useLoaderData } from "react-router-dom";

function Users() {
  const users = useLoaderData() as IUsers[];
  return (
    <div>
      <h1>Users page</h1>
      <hr />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.userName} - {user.userEmail}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

// eslint-disable-next-line react-refresh/only-export-components
export const usersLoader = async () => {
  const res = await fetch("http://localhost:3000/users");
  return res.json();
};
