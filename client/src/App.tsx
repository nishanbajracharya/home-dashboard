import { useEffect, useState } from 'react';

import { Link, getAll } from './services/links';

function App() {
  const [links, setLinks] = useState<Link[]>([]);

  async function getStatus() {
    const response = await getAll();

    setLinks(response);
  }

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <ul>
      {links.map((link) => (
        <li key={link.url}>
          <a href={link.url} title={link.name} target="_blank" rel="noreferrer">
            {link.image ? <img src={link.image} alt={link.name} /> : link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default App;
