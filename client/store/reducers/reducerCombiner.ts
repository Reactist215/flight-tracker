import { combineReducers } from "redux";
import { reducer as formReducer } from "../app/containers/node_modules/redux-form";
import flightsReducers from "./flightsReducers";

export const rootReducer = combineReducers({
  flights: flightsReducers,
  form: formReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
