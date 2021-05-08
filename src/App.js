import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { Reset } from "styled-reset";
import theme, { Fonts } from "./theme";
import GuestList from "./Components/GuestList";
import Typography from "./Components/Typography";
import { useReducer } from "react";

const Container = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction ?? "row"};
  align-items: ${({ alignItems }) => alignItems};
  width: 100%;
  background-image: ${({ theme }) => theme.gradient};
  height: 100vh;
`;

const Card = styled.div`
  transition: width 0.3s;
  display: block;
  width: 100%;
  border-radius: ${({ theme }) => theme.border};
  ${({ theme }) =>
    theme.mediaQuery.biggerThen.sm`
      width:60%
  `};
  filter: blur(0.2px);

  box-shadow: 0 20px 50px rgb(41 187 137 / 35%);
`;

const CardHeader = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: rgba(24, 24, 24, 0.1);
  border-top-left-radius: ${({ theme }) => theme.border};
  border-top-right-radius: ${({ theme }) => theme.border};
  box-shadow: 0 0 2px rgba(41 187 137 / 45%);
  box-sizing: border-box;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: block;
  width: 100%;
  background-color: rgba(36, 36, 36, 0.15);
  filter: blur(0.2px);
  border-bottom-left-radius: ${({ theme }) => theme.border};
  border-bottom-right-radius: ${({ theme }) => theme.border};
  box-shadow: inset 0 0 2px rgba(41 187 137 / 15%);
  box-sizing: border-box;
`;
const guests = [
  "some",
  "body",
  "once",
  "told",
  "me",
  "the",
  "world",
  "is",
  "gona",
  "roll",
  "me",
];

const initialState = {
  guests: guests,
};

const reducer = (state, action) => ({
  ...state,
  [action.type]: action.payload,
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = (value) =>
    dispatch({ type: "guests", payload: [...state.guests, value] });

  console.log(state);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Fonts />
      <Container justify="center" alignItems="center" direction="column">
        <Typography variant="h1" paragraph>
          Party name
        </Typography>
        <Card>
          <CardHeader>
            <Typography variant="h2">Humons</Typography>
          </CardHeader>
          <CardBody>
            <GuestList guests={state.guests} onSubmit={add} />
          </CardBody>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
