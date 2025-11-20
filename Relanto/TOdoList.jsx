// Interview qustion to build todo

import  {useState} from "react"

export default function App() {
    const [list,setlist] = useState([]);
    const [inputVal,setInputVal] = useState("");
    const [isInputFildOpen,setIsInputFildOpen] = useState(false)

    const handilesubmit = (e) => {
        e.preventDefault();
        setlist([...list,inputVal]);
        setInputVal("");
        setIsInputFildOpen(false)
    }
    
    const handileAddButton = () => {
        console.log("called")
        setIsInputFildOpen(!isInputFildOpen)
        return
    }

    const handleChange = (e) => setInputVal(e.target.value)
    
  return (
      <div>
          {
              list.map((item,index) => (
                  <li key={index}>{item}</li>
              ))
          }
          {
              isInputFildOpen && (
                  <div>
                      <input
                          value = {inputVal}
                            onChange={handleChange}
                          />
                      <button onClick={handilesubmit}> Submit</button>
                  </div>
              )
          }
          <button onClick={handileAddButton}>Add</button>
      </div>
  )
}
