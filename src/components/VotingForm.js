import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [zotang, setZotang] = useState("");
  const [zolia, setZolia] = useState("");
  const [idol, setIdol] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const delegate = { zotang, zolia, idol };

    const response = await fetch(`${API_URL}/api/delegates`, {
      method: "POST",
      body: JSON.stringify(delegate),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setZotang("");
      setZolia("");
      setIdol("");
      setError(null);

      dispatch({ type: "CREATE_WORKOUT", payload: json });
      //console.log(json);
      navigate("/");
    }
  };
  const customInputStyle = {
    padding: "10px",
    fontFamily: "Poppins",
    margin: "10px",
    width: "auto",
    border: "1px solid #ddd",
    boxSizing: "border-box",
  };

  return (
    <form className="voting" onSubmit={handleSubmit}>
      <h3>Please, select One from each section below</h3>
      <div className="vote">
        <label>Zotang khat teel in:</label>
        <br />
        <input
          style={customInputStyle}
          type="radio"
          id="zotang1"
          name="zotang"
          value={process.env.REACT_APP_ZOTANG1}
          checked={zotang === process.env.REACT_APP_ZOTANG1}
          onChange={(e) => setZotang(e.target.value)}
        />
        <label htmlFor="zotang1">{process.env.REACT_APP_ZOTANG1}</label>
        <br />
        <input
          style={customInputStyle}
          type="radio"
          id="zotang2"
          name="zotang"
          value={process.env.REACT_APP_ZOTANG2}
          checked={zotang === process.env.REACT_APP_ZOTANG2}
          onChange={(e) => setZotang(e.target.value)}
        />
        <label htmlFor="zotang2">{process.env.REACT_APP_ZOTANG2}</label>
        <br />
        <input
          style={customInputStyle}
          type="radio"
          id="zotang3"
          name="zotang"
          value={process.env.REACT_APP_ZOTANG3}
          checked={zotang === process.env.REACT_APP_ZOTANG3}
          onChange={(e) => setZotang(e.target.value)}
        />
        <label htmlFor="zotang3">{process.env.REACT_APP_ZOTANG3}</label>
        <br />
      </div>

      <div className="vote">
        <label>Zolia khat teel in:</label>
        <br />
        <input
          style={customInputStyle}
          type="radio"
          id="zolia1"
          name="zolia"
          value={process.env.REACT_APP_ZOLIA1}
          checked={zolia === process.env.REACT_APP_ZOLIA1}
          onChange={(e) => setZolia(e.target.value)}
        />
        <label htmlFor="zolia1">{process.env.REACT_APP_ZOLIA1}</label>
        <br />
        <input
          style={customInputStyle}
          type="radio"
          id="zolia2"
          name="zolia"
          value={process.env.REACT_APP_ZOLIA2}
          checked={zolia === process.env.REACT_APP_ZOLIA2}
          onChange={(e) => setZolia(e.target.value)}
        />
        <label htmlFor="zolia2">{process.env.REACT_APP_ZOLIA2}</label>
        <br />
        <input
          style={customInputStyle}
          type="radio"
          id="zolia3"
          name="zolia"
          value={process.env.REACT_APP_ZOLIA3}
          checked={zolia === process.env.REACT_APP_ZOLIA3}
          onChange={(e) => setZolia(e.target.value)}
        />
        <label htmlFor="zolia3">{process.env.REACT_APP_ZOLIA3}</label>
        <br />
      </div>

      <div className="vote">
        <label>Idol khat teel in:</label>
        <br />
        <input
          style={customInputStyle}
          type="radio"
          id="idol1"
          name="idol"
          value={process.env.REACT_APP_IDOL1}
          checked={idol === process.env.REACT_APP_IDOL1}
          onChange={(e) => setIdol(e.target.value)}
        />
        <label htmlFor="idol1">{process.env.REACT_APP_IDOL1}</label>
        <br />
        <input
          style={customInputStyle}
          type="radio"
          id="idol2"
          name="idol"
          value={process.env.REACT_APP_IDOL2}
          checked={idol === process.env.REACT_APP_IDOL2}
          onChange={(e) => setIdol(e.target.value)}
        />
        <label htmlFor="idol2">{process.env.REACT_APP_IDOL2}</label>
        <br />
        <input
          style={customInputStyle}
          type="radio"
          id="idol3"
          name="idol"
          value={process.env.REACT_APP_IDOL3}
          checked={idol === process.env.REACT_APP_IDOL3}
          onChange={(e) => setIdol(e.target.value)}
        />
        <label htmlFor="idol3">{process.env.REACT_APP_IDOL3}</label>
        <br />
      </div>
      <div className="button-container">
        <button>Vote Them</button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
