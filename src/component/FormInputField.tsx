import { Input } from "antd";
import Spacer from "./Spacer";
import { HTMLAttributes } from "react";
import FormInputTitle from "./FormInputTitle";
import React from "react";

const FormInputField = (props: {
    title: string;
    value?: string;
    defaultValue?: string;
    onChange: (text: string) => void;
    error?: string;
    inputProps?: HTMLAttributes<HTMLInputElement>;
    onEnter?: () => void;
    isPassword?: boolean;
}) => {
    const { onChange, title, error, inputProps, value, onEnter } = props;
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <FormInputTitle>{title}</FormInputTitle>
                <Spacer height={1} />
                {error && <div style={{ color: "red", fontSize: 13 }}>[{error}]</div>}
            </div>
            <Spacer height={5} />
            <Input
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onEnter?.();
                    }
                }}
                type={props.isPassword ? "password" : undefined}
                defaultValue={props.defaultValue}
                placeholder={`Please Enter ${title}`}
                onChange={(e) => onChange(e.target.value)}
                {...(value ? { value } : {})}
                {...inputProps}
            />
            <Spacer />
        </div>
    );
};

export default FormInputField;
