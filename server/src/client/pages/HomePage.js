import React from 'react'

const Home = () => {
  return <div>
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
      <div>I'm the BEST home component.</div>
        <button onClick={() => console.log('Hi there!')}>Press me!</button>
    </div>
}

export default {
  component: Home
}