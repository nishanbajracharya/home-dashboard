import { useEffect, useState } from 'react';
import * as linkService from './services/links';

type Link = {
  name: string;
  url: string;
};

function App() {
  const [links, setLinks] = useState<Link[]>([]);

  async function getStatus() {
    const response = await linkService.getAll();

    setLinks(response);
  }

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <ul>
    {
      links.map(link => <li key={link.url}><a href={link.url} title={link.name} target="_blank" rel="noreferrer">{link.name}</a></li>)
    }
    </ul>
  );
}

export default App;
