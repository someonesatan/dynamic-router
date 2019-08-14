import React from 'react'

import Router from './Router'


function App() {
  const user = {
    info: {
      access_level: 1
    }
  }

  window.user = user

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
