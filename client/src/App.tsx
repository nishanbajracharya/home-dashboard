import { useEffect, useState } from 'react';

import { IMAGE_ROOT } from './constants/links';
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
      {Array.isArray(links) && links.map((link) => (
        <li key={link.url}>
          <a href={link.url} title={link.name} target="_blank" rel="noreferrer">
            {link.image ? (
              <img
                src={
                  link.image.location === 'absolute'
                    ? link.image.path
                    : `${IMAGE_ROOT}/${link.image.path}`
                }
                alt={link.name}
              />
            ) : (
              link.name
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default App;
