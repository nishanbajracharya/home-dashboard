import axios from 'axios';

import { LINK_ROOT } from '../constants/links';

type Link = {
  name: string;
  url: string;
};

export async function getAll(): Promise<Link[]> {
  const response = await axios.get<Link[]>(LINK_ROOT);

  return response.data;
}