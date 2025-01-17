export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('gatsbyUser')
    ? JSON.parse(window.localStorage.getItem('gatsbyUser'))
    : {}

const setUser = (user) =>
  window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `editor-cs` && password === `10imuh0u`) {
    return setUser({
      username: `editor-cs`,
      name: `CS Editorial Board`,
      email: `editorial-board-cs@ml.ieice.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = (callback) => {
  setUser({})
  callback()
}
