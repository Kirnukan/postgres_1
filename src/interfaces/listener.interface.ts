import { RequestInterface } from './request.interface';
import express from 'express'

export type THandler = (req: RequestInterface, res: express.Response) => unknown;
export enum EMethod {
  GET='GET',
  POST='POST',
  PUT='PUT',
  DELETE='DELETE'
}

export interface ListenerInterface {
  start(): Promise<void>;
  stop(): Promise<void>;
  addHandler(method: EMethod, route: string, handler: THandler): void;
}
