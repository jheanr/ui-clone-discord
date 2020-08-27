import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  background-color: var(--secondary);
  padding: 24px 9.5px 0 16px;

  grid-area: CL;

  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  margin-bottom: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    color: var(--gray);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const AddCategoryIcon = styled(Add)`
  color: var(--symbol);
  cursor: pointer;
  height: 21px;
  width: 21px;
`;