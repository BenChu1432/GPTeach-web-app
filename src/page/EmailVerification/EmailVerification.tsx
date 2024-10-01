import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../asset/animation_success.json";
import { useDispatch } from "react-redux";
import { appThunkAction } from "../../redux/slices/appSlice";
import { AppDispatch } from "../../redux/store";

const EmailVerification = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { email, token } = useParams();

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleEmailVerification = () => {
        if (email && token) {
            const decodedEmail = decodeURIComponent(email);
            const decodedToken = decodeURIComponent(token);
            dispatch(appThunkAction.emailVerification({ email: decodedEmail, token: decodedToken }));
        }
    };

    useEffect(() => {
        handleEmailVerification();
    }, []);

    // Example usage: Displaying the email and token
    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Lottie options={defaultOptions} height={200} width={200} />
            <h1 style={{ marginTop: "50px", textAlign: "center" }}>Your email has been verified!</h1>
        </div>
    );
};

export default EmailVerification;
