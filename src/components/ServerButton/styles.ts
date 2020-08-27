import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.button<Props>`
  background-color: ${(props) =>
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  border-radius: 50%;
  cursor: pointer;
  height: 48px;
  margin-bottom: 8px;
  position: relative;
  width: 48px;

  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;

  transition: border-radius 0.2s, background-color 0.2s;

  > img {
    height: 24px;
    width: 24px;
  }

  &::before {
    background-color: var(--white);
    border-radius: 50%;
    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
    height: 9px;
    width: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
  }

  &::after {
    background-color: var(--notification);
    border: 4px solid var(--quaternary);
    border-radius: 12px;
    color: var(--white);
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    font-size: 13px;
    font-weight: bold;
    height: 16px;
    padding: 0 4px;
    text-align: right;
    width: auto;

    position: absolute;
    bottom: -4px;
    right: -4px;
  }

  &.active,
  &:hover {
    background-color: ${(props) =>
      props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
    border-radius: 16px;
  }
`;