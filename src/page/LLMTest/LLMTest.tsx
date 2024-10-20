import React, { useEffect, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../asset/animation_success.json";
import { useDispatch } from "react-redux";
import { appThunkAction } from "../../redux/slices/appSlice";
import { AppDispatch } from "../../redux/store";
import FormInputField from "../../component/FormInputField";
import FormTextarea from "../../component/FormTextarea";
import { Button } from "@mui/material";

const LLMTest = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { email, token } = useParams();
    const formData = useRef({ systemImage: "", assistantMessage: "", userMessage: "" });

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleLLMRequest = () => {
        dispatch(
            appThunkAction.sendLLMRequest({
                systemImage: formData.current.systemImage,
                assistantMessage: formData.current.assistantMessage,
                userMessage: formData.current.userMessage,
            })
        );
    };

    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <FormTextarea
                rows={10}
                title="System message"
                onChange={(t) => {
                    formData.current.systemImage = t;
                }}
                inputProps={{ style: { minWidth: 400, fontSize: 16 } }}
            />
            <FormTextarea
                rows={10}
                title="Assistant message"
                onChange={(t) => {
                    formData.current.assistantMessage = t;
                }}
                inputProps={{ style: { minWidth: 400, fontSize: 16 } }}
            />
            <FormTextarea
                rows={10}
                title="User message"
                onChange={(t) => {
                    formData.current.userMessage = t;
                }}
                inputProps={{ style: { minWidth: 400, fontSize: 16 } }}
            />
            <Button variant="contained" style={{ marginTop: "20px" }} onClick={handleLLMRequest}>
                Submit
            </Button>
        </div>
    );
};

export default LLMTest;
