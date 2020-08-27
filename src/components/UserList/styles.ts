import styled from 'styled-components';

interface AvatarProps {
  avatarUrl?: string;
}

export const Container = styled.div`
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;
  padding: 3px 6px 0 16px;

  grid-area: UL;

  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  color: var(--gray);
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const User = styled.div`
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;
  
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    color: var(--white);
    font-weight: 500;
    margin-left: 13px;
    overflow: hidden;
    opacity: 0.7;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > span {
    background-color: var(--discord);
    border-radius: 4px;
    color: var(--white);
    font-size: 11px;
    font-weight: bold;
    margin-left: 9px;
    padding: 4px 5px;
    text-transform: uppercase;
  }
`;

export const Avatar = styled.div<AvatarProps>`
  background-color: var(--primary);
  background-image: url(${props => props.avatarUrl ? props.avatarUrl : ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  height: 32px;
  width: 32px;

  flex-shrink: 0;

  &.bot {
    background-color: var(--mention-detail);
  }
`;