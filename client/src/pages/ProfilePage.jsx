import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios';
import PlacesPage from './PlacesPage';
import AccountNav from '../AccountNav';

const ProfilePage = () => {
  const [redirect, setRedirect] = useState(null)
  let {subpage} = useParams();
  const {user, ready, setUser} = useContext(UserContext)

  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('/logout')
    setRedirect("/")
    setUser(null)
  }
  
  if (!ready) {
    return 'Loading...'
  }

  if (ready && !user.data && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  
  return (
    <div>
    <AccountNav />
      {subpage === 'profile' && (
        <div className='max-w-lg mx-auto text-center '>
          Logged in as {user.data?.name} ({user.data?.email}) <br />
          <button onClick={logout} className='max-w-sm mt-2 primary'>Logout</button>
        </div>
      )}
      {
        subpage === 'places' && (
          <PlacesPage />
        )
      }
    </div>
  )
}


export default ProfilePage