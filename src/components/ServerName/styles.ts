import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  padding: 0 11px 0 16px;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
`;

export const ExpandIcon = styled(ExpandMore)`
  color: var(--white);
  cursor: pointer;
  height: 28px;
  width: 28px;
`;

