import { UsersEntity } from "src/entities/users.entity";

export interface RequestInterface {
  params: Record<string, string>;
  body: Record<string, unknown>;
  user: UsersEntity;
}
