import React, { useEffect } from 'react'

const Home = ({onOpen}) => {
  useEffect(() => {
    onOpen(true);
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home