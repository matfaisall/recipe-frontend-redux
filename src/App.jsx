import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import "./App.css";
import { Provider } from "react-redux";

import Router from "./router";
import store from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Router />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default App;
