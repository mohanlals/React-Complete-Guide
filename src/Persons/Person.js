import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 50%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  } ;
`;
const person = (props) => {
  const style = {
    "@media(min-width:500px)": {
      width: "450px",
    },
  };
  return (
    <StyledDiv>
      <p onClick={props.click}>
        {" "}
        I am {props.name} and i am {props.age} old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.onChange} value={props.name}></input>
    </StyledDiv>
  );
};

export default person;
