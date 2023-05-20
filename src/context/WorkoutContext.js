import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        delegates: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        delegates: [action.payload, ...state.delegates],
        // workouts: [action.payload, ...state.workouts]
      };
    case "DELETE_WORKOUT":
      return {
        delegates: state.delegates.filter((d) => d._id !== action.payload._id),
        //workouts: state.workouts.filter((w) => w._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    delegates: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
