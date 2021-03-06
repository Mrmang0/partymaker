import { useRef, useState } from "react";
import styled from "styled-components";
import Typography from "./Typography";
import Button from "./Button";
import Input from "./Input";

const GuestList = ({ className, guests, onSubmit }) => {
  return (
    <ul className={className}>
      {guests.map((x, i) => (
        <ListItem key={i}>
          <Typography variant="body">{x}</Typography>
        </ListItem>
      ))}
      <StyledAddGuest onSubmit={onSubmit} />
    </ul>
  );
};

const StyledGuestList = styled(GuestList)`
  display: flex;
  flex-wrap: wrap;
  border-radius: ${({ theme }) => theme.border};
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  margin: ${({ theme }) => theme.spacing};
  padding: 0.4rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color};
`;

export default StyledGuestList;

const AddGuestComponent = ({ className, onSubmit }) => {
  const [toggled, setToggled] = useState(false);
  const [value, setValue] = useState("");
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const handleClick = () => {
    if (toggled) {
      document.addEventListener("mousedown", handleClickOutside);
      if (onSubmit) {
        console.log(value);

        onSubmit(value);
      }
      setValue("");
    } else {
      inputRef.current.focus();
    }
    setToggled(!toggled);
  };

  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      document.removeEventListener("mousedown", handleClickOutside);
      inputRef.current.blur();
      setValue("");
    }
  }

  return (
    <li className={className} ref={containerRef}>
      <AnimatedInput
        toggled={toggled}
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <AddGuestButton toggled={toggled} onClick={handleClick}>
        {toggled ? "Ok" : "Add"}
      </AddGuestButton>
    </li>
  );
};

const StyledAddGuest = styled(AddGuestComponent)`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0;

  margin: ${({ theme }) => theme.spacing};
  &::before {
    display: block;
    width: 0.5rem;
    height: 100%;
    background-color: ${({ theme }) => theme.controlBackground};
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    content: " ";
  }
`;

const AddGuestButton = styled(Button)`
  padding-left: ${({ toggled }) => (toggled ? "0.5rem" : "0")};
`;

const AnimatedInput = styled(Input)`
  transition: width 0.3s;
  width: ${({ toggled }) => (toggled ? "6rem" : "0")};
  height: 100%;

  ${({ toggled }) =>
    !toggled &&
    `
    padding: 0;
    margin: 0;
    border: none
  `};
`;
