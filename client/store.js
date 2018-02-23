import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )),
  );
}
