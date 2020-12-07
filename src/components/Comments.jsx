import React, {useRef, useState} from 'react'

export default function Comments() {
  const inputRef = useRef()
  const [commentList, setCommentList] = useState(["hej", "hå"])

  function handleOnClick() {
    // Hämta ut det användaren har skrivit i input fältet
    const input = inputRef.current
    // Lägg till det i Comment List
    if(input.value !== "") {
      setCommentList( [input.value, ...commentList] )
    }
    input.value = ""
  }

  return (
    <div>
      {commentList.map((comment, index) => {
        return <p key={index}>{comment}</p>
      })}
      <input ref={inputRef} type="text" />
      <button 
        onClick={handleOnClick} 
        className="btn btn-primary"
      >
        Send
      </button>
    </div>
  )
}
