import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import Iframe from "react-iframe";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { API_URL } from "../App";

const VotingDetails = ({ delegates }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`${API_URL}/api/delegates/` + delegates._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
      navigate("/");
    }
  };
  const customInputStyle = {
    background: "#FFFFFF",
    border: "none",
    borderRadius: "2px",
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
  };

  return (
    <>
      <div className="workout-details">
        <h4>Your code is {user.orgName}.</h4>
        <p>
          <strong> You voted as the following:</strong>
        </p>
        <p>
          <strong>Zotang: </strong> {delegates.zotang}
        </p>
        <p>
          <strong>Zolia: </strong>

          {delegates.zolia}
        </p>
        <p>
          <strong>Idol: </strong>
          {"   "}
          {delegates.idol}
        </p>
        <p>
          You voted {""}
          {formatDistanceToNow(new Date(delegates.createdAt), {
            addSuffix: true,
          })}
        </p>
        <span className="material-symbols-outlined" onClick={handleClick}>
          delete
        </span>
      </div>

      <div className="iframe-details">
        <Iframe
          style={customInputStyle}
          width="100%"
          height="400"
          src="https://charts.mongodb.com/charts-project-0-ylzik/embed/charts?id=64652fdb-ed0b-4c57-8be6-439dc403e27b&maxDataAge=60&theme=light&autoRefresh=true"
        ></Iframe>
      </div>
      <div className="iframe-details">
        <Iframe
          style={customInputStyle}
          width="100%"
          height="400"
          src="https://charts.mongodb.com/charts-project-0-ylzik/embed/charts?id=64653101-a657-4945-8244-58b171fef607&maxDataAge=60&theme=light&autoRefresh=true"
        ></Iframe>
      </div>
    </>
  );
};

export default VotingDetails;
