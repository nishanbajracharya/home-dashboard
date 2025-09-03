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
    <main className="container">
      <div className="link-wrapper">
        <div className="grid">
          {Array.isArray(links) &&
            links.map((link) => (
              <div key={link.url} className="link">
                <a
                  href={link.url}
                  title={link.name}
                  target="_blank"
                  rel="noreferrer"
                  className="link-url"
                >
                  {link.image ? (
                    <img
                      className="link-img"
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
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default App;
