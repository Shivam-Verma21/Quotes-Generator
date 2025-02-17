import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [quote, setquote] = useState('')
  const [quoteBy, setquoteBy] = useState('')
  const [animate, setAnimate] = useState(false)

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = async () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);

    setquote("Fetching quote...");
    setquoteBy("Fetching author...");

    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes',
        {
          headers: { "X-Api-Key": API_KEY }
        }
      )
      // console.log(response.data[0].quote)
      // console.log(response.data[0].author)
      // console.log(response.data[0].category)

      setquote(response.data[0].quote)
      setquoteBy(response.data[0].author)
    } catch (error) {
      console.error("Failed to fetch quote:", error.response ? error.response.data : error.message);
    }
  }

  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white flex flex-col items-center gap-3">
      <h1 className='text-5xl sm:mt-20 mt-5 text-center'>Quotes Generator</h1>

      <button onClick={fetchQuote} className='cursor-pointer border border-white px-4 py-2 rounded-lg mt-5 sm:text-lg'>Generate</button>

      <div className={`quoteBox border border-white px-6 py-3 rounded-lg mt-6 mx-5 text-center sm:text-xl text-lg ${animate ? "fadeIn" : ""}`}>
        {quote}
      </div>


      <div className="by"><p>By - {quoteBy}</p></div>
    </div>
  )
}

export default App
