import { ERRORS, ErrorType } from '../constants/error';

export class AppError<T = unknown> extends Error {
  message: string;
  details?: T;

  constructor(message: string, details?: T) {
    super(message);

    this.message = message;
    this.details = details;
  }
}

export class FileError extends AppError<ErrorType> {
  constructor(message: string) {
    super(message, ERRORS.FILE_READ_ERROR);
  }
}

export class YamlError extends AppError<ErrorType> {
  constructor(message: string) {
    super(message, ERRORS.YAML_PARSE_ERROR);
  }
}
