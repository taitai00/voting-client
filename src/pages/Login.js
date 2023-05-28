import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [orgName, setOrgName] = useState("");
  const [code, setCode] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(orgName, code);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="button-container">
        <h3>Log In With Your Codes</h3>
      </div>

      <label>Organization:</label>
      <input
        type="text"
        autoCapitalize="none"
        onChange={(e) => setCode(e.target.value)}
        value={code}
      />

      <label>Your Code:</label>
      <input
        type="text"
        autoCapitalize="none"
        onChange={(e) => setOrgName(e.target.value)}
        value={orgName}
      />
      <div className="button-container">
        <button disabled={isLoading}>Log in</button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
