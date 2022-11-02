import {useState, useEffect} from 'react';
import axios from 'axios';

export const BackendStatus = () => {
  const [status, setStatus] = useState('unknown');

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((response) => {
        setStatus(response.data)
      });
  }, []);

  return (
    <article className="backend-status">
      <h2>Backend status</h2>
      <dl>
        <dt>status:</dt>
        <dd>{status}</dd>
      </dl>
    </article>
  );
}
