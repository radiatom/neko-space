import { FC } from "react";
import { styled } from "styled-components";
const ButtonContainer = styled.button`
    display: flex;
    padding: 1px;
    border-radius: 6px;
    // border: 1px solid rgba(218, 41, 40, 1);
    border: 1px solid
        ${(props) => {
            if (props.color === "red") {
                return "rgba(218, 41, 40, 1)";
            } else if (props.color === "black") {
                return "rgb(49,54,54)";
            } else if (props.color === "blue") {
                return "rgb(42,101,237)";
            }
        }};
    // background: linear-gradient(0deg, rgba(218, 41, 40, 1) 23%, rgba(218, 41, 40, 0.4906337535014006) 100%);
    background: linear-gradient(
        0deg,
        ${(props) => {
            if (props.color === "red") {
                return "rgba(218, 41, 40, 1) 23%,rgba(235,104,108)";
            } else if (props.color === "black") {
                return "rgb(49,54,54) 23%, rgb(106,110,110)";
            } else if (props.color === "blue") {
                return "rgb(42,101,237) 23%, rgb(128,160,236)";
            }
        }}100%
    );
`;
const ButtonContent = styled.div`
    height: 100%;
    width: 100%;
    padding: 7px;
    border-radius: 4px;
    background: linear-gradient(
        0deg,
        ${(props) => {
            if (props.color === "red") {
                return "rgba(218, 41, 40, 1) 23%,rgba(226,82,81)";
            } else if (props.color === "black") {
                return "rgb(49,54,54) 23%, rgb(74,80,80)";
            } else if (props.color === "blue") {
                return "rgb(42,101,237) 23%, rgb(83,132,239)";
            }
        }}77%
    );
    color: white;
`;
type propsType = {
    children: string;
    color: string;
};
const Button: FC<propsType> = ({ children, color }) => {
    return (
        <ButtonContainer color={color}>
            <ButtonContent color={color}>{children}</ButtonContent>
        </ButtonContainer>
    );
};

export default Button;
