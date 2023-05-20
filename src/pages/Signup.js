import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [orgName, setOrgName] = useState("");
  const [code, setCode] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(adminCode, orgName, code);
  };
  /*
   */

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <div className="button-container">
        <h3>Sign Up</h3>
      </div>

      <label>Admin code:</label>
      <input
        type="password"
        onChange={(e) => setAdminCode(e.target.value)}
        value={adminCode}
      />

      <label>Organization:</label>
      <input
        type="text"
        onChange={(e) => setCode(e.target.value)}
        value={code}
      />
      <label>User Code:</label>
      <input
        type="text"
        onChange={(e) => setOrgName(e.target.value)}
        value={orgName}
      />
      <div className="button-container">
        <button disabled={isLoading}>Sign up</button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
