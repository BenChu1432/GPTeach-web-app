import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";

import React from "react";

import EmailVerification from "../page/EmailVerification/EmailVerification";
import Root from "../page/Root/Root";

export enum RouteEnum {
    LOGIN = "/login",
}

export const getRouter = (_: any) => {
    return createBrowserRouter(createRoutesFromElements(<Route path="/email-verification" element={<EmailVerification />} />));
};
export default getRouter;
