import { FC } from "react";
import { styled } from "styled-components";
const ButtonContainer = styled.button`
    display: flex;
    padding: 1px;
    border-radius: 6px;
    border: 1px solid rgba(218, 41, 40, 1);
    background: linear-gradient(0deg, rgba(218, 41, 40, 1) 23%, rgba(218, 41, 40, 0.4906337535014006) 100%);
`;
const ButtonContent = styled.div`
    height: 100%;
    width:100% ;
    padding:7px ;
    border-radius: 4px;
    background: linear-gradient(0deg, rgba(218, 41, 40, 1) 23%, rgba(226,82,81,1) 77%);
    color:white;
`;
type propsType={
    children:string
}
const Button: FC<propsType> = (props) => {
    return (
        <ButtonContainer>
            <ButtonContent>{props.children}</ButtonContent>
        </ButtonContainer>
    );
};

export default Button;
