import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ErrMsg = styled.p`
  text-align: center;
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const OffScreen = styled.p`
  position: absolute;
  left: -9999px;
`;

export const Instructions = styled.p`
  font-size: 1rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.25rem;
  position: relative;
  bottom: -10px;
`;

export const ShowMarks = styled(FontAwesomeIcon)`
  color: ${(props) => (props.validname ? "limegreen" : "")};
`;
