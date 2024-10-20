import { PropsWithChildren } from "react";
import colors from "../constant/colors";
import React from "react";

export default ({ children }: PropsWithChildren) => {
    return <div style={{ color: colors.grey_deep, fontWeight: 400, fontSize: 16, paddingLeft: 4 }}>{children}</div>;
};
