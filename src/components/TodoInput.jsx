import { useState } from 'react'

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleAddTodo(inputValue)
          setInputValue('')
        }
      };

    return (
        <div className="input-container">
            <input
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}
                onKeyDown={handleKeyDown}
                placeholder="Add To-Do..."/>
            
            <button onClick ={() => {
                if (!inputValue) { return }
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}