'use strict'
let message = document.querySelector('.input')
const encodeBtn = document.querySelector('.btn')
const normalized = document.getElementById('display1')
const displayChunks = document.getElementById('display2')
const encodedMsg = document.getElementById('display3')

// display normalizedMessage
const displayNormalized = () => {
  const messageLength = normalized.length
  const arr = ["!","?","",".","...",",",":",";","()","[]"];
  for (let i=0; i<messageLength; i++){
    
  }
}


// split message into chunks
// encode the chunked message
// const encodeMessage = (rectangle, cols) => {
//   const displayChunks = []
//   for (let i = 0; i < cols; i++) {
//     const text = ''
//     rectangle.forEach(element => {
//       encodeMessage = (rectangle, cols) => {
//         // main function
//         const displayMessage = () => {
//           message = message.value
//           const normalized = message.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//           // const normalizedText = message.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//           const messageLength = normalized.length
//           // check if characters are up to 50
//           if (messageLength < 50) {
//             const displayMessage = () => {
//               const cols = Math.ceil(Math.sqrt(messageLength))
//               const rows = Math.ceil(messageLength / cols)
//               const rectangle = chunkMessage(cols, rows, normalizedText)
//               const displayChunks = encodeMessage(rectangle, cols)
//               // const encodedChunks = encodeMessage(rectangle, cols)
//               let output = ''
//               encodedChunks.forEach(chunk => {
//                 output += chunk.trim()
//               })
//               input.innerHTML = normalized
//               displayChunks.innerHTML = encodedChunks.join('<br>')
//               encodedMsg.innerHTML = output
//             }
//             encodeBtn.addEventListener('click', displayMessage)
//           }
//         }
//       }
//     })
//   }
// }

