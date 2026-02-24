import type { IUsers } from "../interfaces/Users.interface";
import { Link, useLoaderData } from "react-router-dom";

function Users() {
  const users = useLoaderData() as IUsers[];
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="border-l-2 px-3 py-2 cursor-pointer not-last:mb-5 hover:text-red-500"
          >
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
