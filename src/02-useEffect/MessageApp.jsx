import React, { useEffect, useState } from 'react'

const MessageApp = () => {
    const [coords, setCoords] = useState({x: 0, y: 0})
    useEffect(() => {

      const onMouseMove = ({x,y}) => {
        setCoords({x,y})
      }

      window.addEventListener('mousemove', onMouseMove)
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    
    return (
      <>
          <h4>El usuario ya existe</h4>
          {JSON.stringify(coords)}
      </>
    )
}

export default MessageApp