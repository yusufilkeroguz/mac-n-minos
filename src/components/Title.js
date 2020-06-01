import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  color: ${(props) => props.color ? props.color : '#505061'};
  line-height: 1.5;
`;

export default Title;
