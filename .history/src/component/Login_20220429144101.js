import React, { useState, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
// import Styled from 'styled-components'
// import GithubIcon from 'mdi-react/GithubIcon'
import { AuthContext } from '../App'
import './Login.css'

export default function Login() {
  const { state, dispatch } = useContext(AuthContext)
  const [data, setData] = useState({ errorMessage: '', isLoading: false })

  const { client_id, redirect_uri } = state

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href
    const hasCode = url.includes('?code=')

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split('?code=')
      window.history.pushState({}, null, newUrl[0])
      setData({ ...data, isLoading: true })

      const requestData = {
        code: newUrl[1],
      }

      const proxy_url = state.proxy_url

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: 'POST',
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: 'LOGIN',
            payload: { user: data, isLoggedIn: true },
          })
        })
        .catch((error) => {
          setData({
            isLoading: false,
            errorMessage: 'Sorry! Login failed',
          })
        })
    }
  }, [state, dispatch, data])

  if (state.isLoggedIn) {
    return <Navigate to='/' />
  }

  const clientId = '52b31b7fee05e7163a51';
  const uri = 'http://localhost:3000'

  return (
    <>
      <section className='container'>
        <div>
          <h1>Welcome</h1>
          <span>Super amazing app</span>
          <span>{data.errorMessage}</span>
          <div className='login-container'>
            {data.isLoading ? (
              <div className='loader-container'>
                <div className='loader'></div>
              </div>
            ) : (
              <>
                {
                  // Link to request GitHub access
                }
                <a
                  className='login-link'
                  // href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                  href={`https://github.com/login/oauth/authorize?client_id=${clientd}&redirect_uri=${redirect_uri}&scope=read:user`}
                  onClick={() => {
                    setData({ ...data, errorMessage: '' })
                  }}
                >
                  {/* <GithubIcon /> */}
                  <span>Login with GitHub</span>
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

// const Wrapper = Styled.section`
  
// `
