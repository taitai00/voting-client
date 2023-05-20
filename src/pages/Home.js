import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { API_URL } from "../App";

// components
import VotingDetails from "../components/VotingDetails";
import VotingForm from "../components/VotingForm";

const Home = () => {
  const { delegates, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${API_URL}/api/delegates`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      {!delegates || delegates.length === 0 ? (
        <div className="workouts">
          <VotingForm />
        </div>
      ) : (
        <div className="workouts">
          {delegates.map((delegates) => (
            <VotingDetails key={delegates._id} delegates={delegates} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
