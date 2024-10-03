import React, { useEffect, useRef } from "react";
import { Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";
import animationData from "../../asset/animation_success.json";
import { useDispatch } from "react-redux";
import appSlice, { appThunkAction } from "../../redux/slices/appSlice";
import { AppDispatch } from "../../redux/store";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const formData = useRef({ email: "" });

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleGmailAccountToSendVerificationToDeleteAccount = () => {
        dispatch(appSlice.actions.setLoading(true));
        dispatch(appThunkAction.sendGmailToVerifyAccountDeletion({ email: formData.current.email }))
            .unwrap()
            .finally(() => {
                navigate("/delete-account/email-sent");
                dispatch(appSlice.actions.setLoading(false));
            });
    };

    // Only render DeleteAccount specific content if the path is exactly '/delete-account'
    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
                    <img style={{ height: "200px", width: "250px" }} src="https://gpteach-resources.s3.ap-southeast-1.amazonaws.com/chatbot-logo.png" />
                    <div style={{ fontSize: "30px", fontWeight: "bold" }}>GPTeach</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "15px", fontWeight: "bold", textAlign: "left", marginBottom: "10px" }}>Email to delete:</div>
                    <TextField
                        sx={{ width: "300px" }}
                        id="outlined-basic"
                        required
                        label="Required"
                        variant="outlined"
                        onChange={(text) => {
                            formData.current.email = text.target.value;
                        }}
                    />
                </div>
                <Button variant="contained" style={{ marginTop: "20px" }} onClick={handleGmailAccountToSendVerificationToDeleteAccount}>
                    Submit
                </Button>
            </>
        </div>
    );
};

export default DeleteAccount;
