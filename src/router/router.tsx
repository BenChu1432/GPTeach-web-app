import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";

import React from "react";

import EmailVerification from "../page/EmailVerification/EmailVerification";
import Root from "../page/Root/Root";

export enum RouteEnum {
    LOGIN = "/login",
}

export const getRouter = (_: any) => {
    return createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/"} element={<Root />}>
                <Route path="/email-verification/:email/:token" element={<EmailVerification />} />
            </Route>
        )
    );
};
export default getRouter;
