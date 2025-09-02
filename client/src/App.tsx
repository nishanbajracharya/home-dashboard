import axios from 'axios';
import { useEffect, useState } from 'react';

type Link = {
  name: string;
  url: string;
};

function App() {
  const [links, setLinks] = useState<Link[]>([]);

  async function getStatus() {
    const response = await axios.get<Link[]>('/api/links');

    setLinks(response.data);
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
