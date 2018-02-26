import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import rootReducer from "../reducers/rootReducer";

const history = createHistory();
const loggerMiddleware = createLogger();
const middleware = routerMiddleware(history);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware, middleware)),
  );

  if (module.hot) {
    module.hot.accept("../reducers/rootReducer", () => {
      const nextReducer = require("../reducers/rootReducer").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
