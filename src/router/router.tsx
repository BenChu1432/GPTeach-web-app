import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";

import React from "react";

import EmailVerification from "../page/EmailVerification/EmailVerification";
import Root from "../page/Root/Root";
import DeleteAccount from "../page/DeleteAccount/DeleteAccount";
import DeleteAccountSuccess from "../page/DeleteAccount/success/DeleteAccountSuccess";
import DeleteAccountEmailSent from "../page/DeleteAccount/email-sent/DeleteAccountEmailSent";

export enum RouteEnum {
    LOGIN = "/login",
}

export const getRouter = (_: any) => {
    return createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/"} element={<Root />}>
                <Route path="/delete-account" element={<DeleteAccount />}>
                    <Route index={false} path="email-sent" element={<DeleteAccountEmailSent />} />
                    <Route index={false} path="success/:email/:token" element={<DeleteAccountSuccess />} />
                </Route>
                <Route path="/email-verification/:email/:token" element={<EmailVerification />} />
            </Route>
        )
    );
};
export default getRouter;
