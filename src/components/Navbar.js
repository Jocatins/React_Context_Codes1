import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext
              const { isLightTheme, light, dark } = themeContext
              const theme = isLightTheme ? light : dark
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Sphinx app</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? 'LoggedIn' : 'LoggedOut'}
                  </div>
                  <li>Bees</li>
                  <li>Titans</li>
                  <li>Gypsies</li>
                </nav>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default Navbar
