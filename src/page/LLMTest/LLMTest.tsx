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
import { useAppSelector } from "../../redux/hooks";
import FormInputTitle from "../../component/FormInputTitle";
import Spacer from "../../component/Spacer";

const LLMTest = () => {
    const dispatch = useDispatch<AppDispatch>();
    const llmResponse = useAppSelector((s) => s.app.llmResponse);
    const formData = useRef({ systemImage: "", assistantMessage: "", userMessage: "" });
    const handleLLMRequest = () => {
        dispatch(
            appThunkAction.sendLLMRequest({
                systemMessage: formData.current.systemImage,
                assistantMessage: formData.current.assistantMessage,
                userMessage: formData.current.userMessage,
            })
        );
    };

    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 100 }}>
            <div>
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
            <div style={{ height: "85%", width: "20%" }}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <FormInputTitle>LLM Response:</FormInputTitle>
                    <Spacer height={1} />
                    <div>{llmResponse}</div>
                </div>
            </div>
        </div>
    );
};

export default LLMTest;
