
import styled from 'styled-components';

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? 'black' : 'green')};
  margin: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
  }
`;

export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack} />;
}
=======
import styled from "styled-components";

const StyledBox = styled.div`
width: 100px;
height: 100px
background-color: green;
margin: 2rem;
`
