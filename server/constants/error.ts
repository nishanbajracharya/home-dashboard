export type ErrorType = {
  name: string;
  code?: number;
};

export const FILE_READ_ERROR: ErrorType = {
  name: 'FILE_READ_ERROR',
};

export const YAML_PARSE_ERROR: ErrorType = {
  name: 'YAML_PARSE_ERROR',
};

export const ERRORS = {
  FILE_READ_ERROR,
  YAML_PARSE_ERROR,
};
