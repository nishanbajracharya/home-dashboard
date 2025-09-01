import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('Not Set');

  async function getStatus() {
    const response = await axios.get<{status: string}>('/api/status');

    setStatus(String(response.data.status));
  }

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <>
      <p>API Status {status}</p>
    </>
  );
}

export default App;
