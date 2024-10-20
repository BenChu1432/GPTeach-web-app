import React from "react";
import { HTMLAttributes } from "react";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

import Spacer from "./Spacer";
import FormInputTitle from "./FormInputTitle";

interface FormTextareaProps {
    title: string;
    value?: string;
    defaultValue?: string;
    onChange: (text: string) => void;
    error?: string;
    inputProps?: HTMLAttributes<HTMLTextAreaElement>;
    onEnter?: () => void;
    isPassword?: boolean; // This prop is irrelevant for TextArea and should be reconsidered.
    rows?: number;
    cols?: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ title, value, defaultValue, onChange, error, inputProps, onEnter, rows, cols }) => {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <FormInputTitle>{title}</FormInputTitle>
                <Spacer height={1} />
                {error && <div style={{ color: "red", fontSize: 13 }}>[{error}]</div>}
            </div>
            <Spacer height={5} />
            <textarea
                onKeyDown={(e) => {
                    if (e.key === "Enter" && onEnter) {
                        onEnter();
                    }
                }}
                rows={rows}
                cols={cols}
                defaultValue={defaultValue}
                placeholder={`Please input ${title}`}
                onChange={(e) => onChange(e.target.value)}
                {...(value ? { value } : {})}
                {...inputProps}
            />
            <Spacer />
        </div>
    );
};

export default FormTextarea;
