import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  margin-right: 4px;
  padding: 4px 16px;

  display: flex;
  align-items: center;

  &.mention {
    background-color: var(--mention-message);
    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div`
  background-color: var(--secondary);
  border-radius: 50%;
  height: 40px;
  width: 40px;

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const Message = styled.div`
  margin-left: 17px;
  min-height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;  
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: var(--white);
    font-size: 16px;
  }

  > span {
    background-color: var(--discord);
    border-radius: 4px;
    color: var(--white);
    font-size: 11px;
    font-weight: bold;
    margin-left: 6px;
    padding: 4px 5px;
    text-transform: uppercase;
  }

  > time {
    color: var(--gray);
    font-size: 13px;
    margin-left: 6px;
  }
`;

export const Content = styled.div`
  color: var(--white);
  font-size: 16px;
  text-align: left;
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;