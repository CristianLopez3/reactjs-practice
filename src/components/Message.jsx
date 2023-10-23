import React from 'react'

export const Message = (msg, bgColor) => {

  let styles = {
    padding: "1rem",
    marginBotton: "1rem", 
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    background: bgColor
  }

  return (
    <div style={styles}>
      <h2>Message</h2>
      <p>{msg}</p>
    </div>
  )
}
