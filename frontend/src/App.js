import React, { useState, useEffect } from 'react'

function App(){

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/testing").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return(
    <div>
      {(typeof data.testing === 'undefined') ? (
        <p>Loading...</p>
      ): (
        data.testing.map((testing, i) => (
          <p key={i}>{testing}</p>
        ))
      )}
    </div>
  )
}

export default App