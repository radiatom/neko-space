import "./App.css";
import styled from "styled-components";
import Button from "./Components/Button";

const AppWraper = styled.div`
    padding: 20px;
    display: flex;
`;

function App() {
    return (
        <AppWraper>
            <Button>Button</Button>
        </AppWraper>
    );
}

export default App;
