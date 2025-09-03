import yaml from 'yaml';
import path from 'path';
import fs from 'fs/promises';

import { FileError, YamlError } from '../modules/AppError';

export const DEFAULT_CONTENT_PATH = path.resolve(__dirname, '../content.yml');

export type Link = {
  name: string;
  url: string;
  image?: {
    location: 'local' | 'absolute';
    path: string;
  };
  port?: number;
};

export type Content = {
  content: Link[];
};

export async function getLinks(
  path: string = DEFAULT_CONTENT_PATH
): Promise<Link[]> {
  let contentRaw: string;

  try {
    contentRaw = await fs.readFile(path, { encoding: 'utf-8' });
  } catch (e) {
    if (e instanceof Error) {
      // If it's a specific Node.js file system error
      if ('code' in e && typeof e.code === 'string') {
        if (e.code === 'ENOENT') {
          throw new FileError('File not found');
        }
      }
      throw new FileError('An unknown error occurred during file read');
    }
    // Handle non-Error objects if necessary
    throw new FileError('An unexpected non-Error object was thrown');
  }

  try {
    const { content } = yaml.parse(contentRaw) as Content;

    return content;
  } catch {
    throw new YamlError('Yaml Parse Error');
  }
}
