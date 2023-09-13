'use strict'
let message = document.querySelector('.input');
const encodeBtn = document.querySelector('.btn')
let normalized = document.getElementById('display1');
let displayChunks = document.getElementById('display2');
let encodedMsg = document.getElementById('display3');

// 'use strict'
// let message = document.getElementById('message')
// const encodeBtn = document.querySelector('.button')
// let input = document.getElementById('normalized-text')
// let displayChunks = document.getElementById('encoded-chunks')
// let encodedMsg = document.getElementById('encoded-message')
// const input = document.getElementById('normalized-text')
// const displayChunks = document.getElementById('encoded-chunks')
// const encodedMsg = document.getElementById('encoded-message')

// split message into chunks
// encode the chunked message
const encodeMessage = (rectangle, cols) => {
  let displayChunks = []
  for (let i = 0; i < cols; i++) {
    let text = ''
    rectangle.forEach(element => {
 encodeMessage = (rectangle, cols) => {
// main function
const displayMessage = () => {
  message = message.value
  let normalized = message.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  // const normalizedText = message.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const messageLength = normalized.length
  // check if characters are up to 50
  if (messageLength < 50) {
   const displayMessage = () => {
  const cols = Math.ceil(Math.sqrt(messageLength))
  const rows = Math.ceil(messageLength / cols)
  const rectangle = chunkMessage(cols, rows, normalizedText)
  let displayChunks = encodeMessage(rectangle, cols)
  // const encodedChunks = encodeMessage(rectangle, cols)
  let output = ''
  encodedChunks.forEach(chunk => {
    output += chunk.trim()
  })
  input.innerHTML = normalized
  displayChunks.innerHTML = encodedChunks.join('<br>')
  encodedMsg.innerHTML = output
}
encodeBtn.addEventListener('click', displayMessage)
 }
 }
  }
  })
}
}