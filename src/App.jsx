import { useState } from "react"
import { Copy, ClipboardPaste, CircleX } from 'lucide-react'
import confetti from "canvas-confetti"

export default function App() {

  const [url, setUrl] = useState("")
  const [clicked, setClicked] = useState(false)

  const str = url
  const newStr = str.slice(0,str.indexOf('/', 8))

  const myFunction = () => {
    if (!url.includes("https://")) {
      alert("Please insert a valid URL")
    } else if (url.endsWith(".com") || url.endsWith(".net") || url.endsWith(".org")) {
      alert("Not able to redirect")
    } else {
      setClicked(true)
      confetti()
      console.log(newStr)
    }

  }

  async function TomatoPaste() {
    const text = await navigator.clipboard.readText();
    setUrl(text)

    if (text == "") {
      alert("There's nothing in your clipboard.")
    }
  } 

  function LostToVettori() {
    setUrl("")
    setClicked(false)
  }

  const FaxMachine = () => {
    navigator.clipboard.writeText(newStr)
    alert("Copied!")
  }

  return (
    <>
    <div className="div">
      <h2>A URL-redirector</h2>

      <div className="innerdiv">
        <input 
        type="text" 
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        />
        <button onClick={myFunction}>Redirect</button>
      </div>

      <div className="innerdiv">
        <ClipboardPaste onClick={TomatoPaste}/>
        <CircleX onClick={LostToVettori}/>
      </div>

      <br />


      {clicked ? 
      <>
        <Copy onClick={FaxMachine}/>
          <input 
          type="text" 
          readOnly
          value={newStr}
          />
        <a href={newStr}><button>Redirect me now!</button></a> 
      </>
        :
      ""}

    </div>
    </>
  )
}
