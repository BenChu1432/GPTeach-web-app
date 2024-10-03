import React from "react";
import animationData from "../../src/asset/loading-spinner.json";
import { useAppSelector } from "../redux/hooks";
import Lottie from "react-lottie";

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
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Lottie options={defaultOptions} height={200} width={200} />
            <h1 style={{ marginTop: "50px", textAlign: "center" }}>Verify your email!</h1>
        </div>
    ); // Replace with your actual spinner component
};

export default LoadingSpinner;
