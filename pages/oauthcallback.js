import { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthProvider'
import { useRouter } from 'next/router'

export default function SaveAuthToken() {
  const router = useRouter();
  const { setAuth } = useContext(AuthContext);

  var token, path;
  path = router.asPath;
  path = path.split('=');
  path = path[1];


  token = decodeURIComponent(path);

  useEffect(() => {
    setAuth({ token })
  }, [token, setAuth])
}