import React from "react";
import animationData from "../../src/asset/loading-spinner.json";
import { useAppSelector } from "../redux/hooks";
import Lottie from "react-lottie";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
    const isLoading = useAppSelector((s) => s.app.loading);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    if (!isLoading) return null;

    return (
        <Backdrop open={isLoading} style={{ backgroundColor: "rgba(255,255,255,0.7)", color: "rgb(0,0,0,0.5)", zIndex: 10 ** 7 }}>
            <Lottie options={defaultOptions} height={100} width={100} />
        </Backdrop>
    );
};

export default LoadingSpinner;
