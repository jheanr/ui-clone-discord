import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--tertiary);
  grid-area: SL;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 11px 0;

  display: flex;
  align-items: center;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  border-bottom: 2px solid var(--quaternary);
  margin-bottom: 8px;
  width: 32px;
`;