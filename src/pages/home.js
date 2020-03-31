import React from 'react'

import Home from '../components/home/index'
import { ApplicationProvider } from '../components/home/context'

function HomePage(props) {
  return (
    <ApplicationProvider>
      <Home />
    </ApplicationProvider>
  )
}

export default HomePage
