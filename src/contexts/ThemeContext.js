import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#fff', ui: ' #255', bg: '#eee' },
    dark: { syntax: '#fff', ui: '#000', bg: '#555' },
  }
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme })
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider
