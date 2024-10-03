import React, { useEffect, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../../asset/email-sending.json";
import { useDispatch } from "react-redux";
import { appThunkAction } from "../../../redux/slices/appSlice";
import { AppDispatch } from "../../../redux/store";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const DeleteAccountEmailSent = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Lottie options={defaultOptions} height={200} width={200} />
            <h1 style={{ marginTop: "50px", textAlign: "center" }}>Verify your email!</h1>
        </div>
    );
};

export default DeleteAccountEmailSent;
