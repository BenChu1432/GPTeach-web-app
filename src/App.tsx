import getRouter from "./router/router";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import React from "react";
import { RouterProvider } from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={getRouter(store)} />
        </Provider>
    );
}

export default App;
