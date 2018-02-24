import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
  );

  if (module.hot) {
    module.hot.accept("./reducers/rootReducer", () => {
      const nextRootReducer = require("./reducers/rootReducer");
      store.replaceReducer(nextRootReducer).default;
    });
  }

  return store;
}
