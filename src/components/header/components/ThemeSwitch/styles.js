import styled from "styled-components";

export const ThemeChanger = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1.2rem;
  width: 165px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.header};
  border-radius: 6px;
  transition: 0.2s;
  :hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.text};
  }
  @media (max-width: 1444px) and (min-width: 769px) {
    font-size: 16px;
    width: 145px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    width: fit-content;
    span{
        display: none;
    }
  }
`;
