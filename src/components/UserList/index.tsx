import React from "react";

import { Container, Role, User, Avatar } from "./styles";

export interface UserProps {
  nickname: string;
  isBot?: boolean;
  avatarUrl?: string;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, avatarUrl }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} avatarUrl={avatarUrl} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Ramos" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Zé" isBot />
      <UserRow nickname="Simas" />
      <UserRow nickname="Arthur" isBot />
      <UserRow nickname="Wesley" />
      <UserRow nickname="Bruno" />
      <UserRow nickname="Rafinha" />
      <UserRow nickname="Alexandre" isBot />
      <UserRow nickname="Daniel" />
      <UserRow nickname="Gustavo" />
      <UserRow nickname="Ghost" />
      <UserRow nickname="Adriano" />
    </Container>
  );
};

export default UserList;
