import styled from "styled-components";
import AutocompleteInput from "./AutocompleteInput";
import locations from "../utils/location";
import { useState } from "react";

const Button = styled.button`
  button:hover {
    background: #0b7dda;
  }
`;
const Form = styled.form`
  * {
    box-sizing: border-box;
  }

  & input[type="text"] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 80%;
    background: #f1f1f1;
  }

  & ${Button} {
    background-color: #2196f3;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    border-top: 1px solid gray;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    float: left;
    font-size: 17px;
    padding: 10px;
    width: 20%;
  }

  & ${Button}:hover {
    background: #0b7dda;
  }
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

type SearchBarProps = {
  onSubmit: (location: string) => string;
};

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [location, setLocation] = useState<string>("");
  const onChanged = (params: any) => {
    setLocation(params);
  };

  const actionCall = (event: any) => {
    event.preventDefault();
    onSubmit(location);
  };
  return (
    <Form onSubmit={actionCall}>
      <AutocompleteInput
        onChanged={onChanged}
        datas={locations}
        placeholder={"동, 면, 읍 을 입력하세요."}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
