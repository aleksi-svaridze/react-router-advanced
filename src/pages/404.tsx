import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page does noe exists</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default NotFoundPage;
