import { useEffect } from 'react';

function AdminRedirect() {
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      window.location.replace('https://nivid.onrender.com/admin');
    }
  }, []);

  return null;
}

export default AdminRedirect;