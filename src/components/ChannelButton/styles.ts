import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    color: var(--senary);
    margin-left: 5px;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  color: var(--symbol);
  height: 20px;
  width: 20px;
`;

export const InviteIcon = styled(PersonAdd)`
  color: var(--symbol);
  cursor: pointer;
  height: 16px;
  width: 16px;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  color: var(--symbol);
  cursor: pointer;
  height: 16px;
  margin-left: 4px;
  width: 16px;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;