import { useState } from "react"
import confetti from "canvas-confetti"

export default function App() {

  const [url, setUrl] = useState("")

  const str = url
  const newStr = str.slice(0,str.indexOf('/', 8))

  return (
    <>
    <div className="div">
      <h2>A URL-redirector</h2>

      <input 
      type="text" 
      onChange={(e) => setUrl(e.target.value)}
      value={url}
      />

      <a href={newStr}><button>Redirect me</button></a>
      <button onClick={() => confetti()}>Confetti Button</button>
    </div>
    </>
  )
}
