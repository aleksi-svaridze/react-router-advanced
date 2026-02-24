import { useEffect, useState } from "react";
import type { IUsers } from "../interfaces/Users.interface";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState<IUsers>();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/users/${params.id}`)
      .then((res) => res.json())
      .then((data: IUsers) => setUser(data));
  }, [params.id]);
  return (
    <ul className="border-l-2 px-3 py-2 text-red-500">
      <li>Name: {user?.userName}</li>
      <li>Email: {user?.userEmail}</li>
    </ul>
  );
}

export default User;
