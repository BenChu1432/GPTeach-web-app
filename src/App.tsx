import getRouter from "./router/router";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import React from "react";
import { RouterProvider } from "react-router-dom";
import ConfigAxios from "./component/ConfigAxios";
import LoadingSpinner from "./component/LoadingSpinner";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <Provider store={store}>
            <ConfigAxios store={store}>
                <RouterProvider router={getRouter(store)} />
                <ToastContainer limit={1} />
            </ConfigAxios>
        </Provider>
    );
}

export default App;
