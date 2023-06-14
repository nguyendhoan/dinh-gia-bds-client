import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const withPageProtected = (handler) =>
  function PageProtectedHandler(props) {
    const [isLogin, setIsLogin] = useState(false)
    const history = useHistory()

    useEffect(() => {
      if (localStorage.getItem('accessToken')) {
        setIsLogin(true)
      } else history.push('/auth')
    }, [isLogin])

    if (!localStorage.getItem('accessToken') && !isLogin) {
      return <h2>Loading ....</h2>
    }

    const Component = handler
    return <Component />
  }
