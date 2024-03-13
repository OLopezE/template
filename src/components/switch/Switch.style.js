import styled from "styled-components";

const MySwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.palette.text};
`;

export { MySwitch };