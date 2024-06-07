import { ITextError } from 'utils/interfaces/text-error';

export interface IError extends ITextError {
  code: number;
}
