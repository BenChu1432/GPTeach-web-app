import { useDispatch } from "react-redux";
import { authThunkAction } from "../../redux/slices/authSlice";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import React from "react";
import FormInputField from "../../component/FormInputField";
import Spacer from "../../component/Spacer";
import { Button } from "antd";
import toastUtil from "../../utils/toastUtil";

const Login = () => {
    const { accessToken, user } = useAppSelector((s) => s.auth);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = async () => {
        await dispatch(
            authThunkAction.login({
                email,
                password,
            })
        )
            .unwrap()
            .then(() => {
                navigate("/llm-test");
            });
    };

    // useEffect(() => {
    //     console.log("accessToken:", accessToken);
    //     if (accessToken) {
    //         navigate("/llm-test");
    //     }
    // }, [accessToken]);

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <div style={{ flex: 4 }} />
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", height: "100%", justifyContent: "center", flexDirection: "column", margin: "10px" }}>
                    <div style={{ flex: 2 }} />
                    <div style={{ minWidth: 400, width: 400 }}>
                        <FormInputField
                            title="Email"
                            onChange={(t) => {
                                setEmail(t);
                            }}
                            inputProps={{ style: { minWidth: 400, fontSize: 16 } }}
                            value={email}
                        />
                        <FormInputField
                            title="Password"
                            onChange={(t) => {
                                setPassword(t);
                            }}
                            isPassword={true}
                            inputProps={{ style: { minWidth: 400, fontSize: 16 } }}
                            onEnter={login}
                        />
                        <Spacer />
                        <Spacer />
                        <Button type="primary" block onClick={login} style={{ minWidth: 400 }}>
                            Login
                        </Button>
                    </div>
                    <div style={{ flex: 6 }} />
                </div>
            </div>
            <div style={{ flex: 10 }} />
        </div>
    );
};

export default Login;
