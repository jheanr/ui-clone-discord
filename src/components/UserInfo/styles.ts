import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

interface AvatarProps {
  avatarUrl?: string;
}

export const Container = styled.div`
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  padding: 10px;

  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div<AvatarProps>`
  background-color: var(--gray);
  background-image: url(${props => props.avatarUrl ? props.avatarUrl : ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    display: block;
    font-size: 13px;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(Mic)`
  color: var(--white);
  cursor: pointer;
  height: 20px;
  opacity: 0.7;
  width: 20px;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  color: var(--white);
  cursor: pointer;
  height: 20px;
  opacity: 0.7;
  width: 20px;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  color: var(--white);
  cursor: pointer;
  height: 20px;
  opacity: 0.7;
  width: 20px;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;