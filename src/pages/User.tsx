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
    <div>
      <h1>
        {user?.userName} : {user?.userEmail}
      </h1>
    </div>
  );
}

export default User;
