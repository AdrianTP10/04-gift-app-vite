import { useState } from "react"



export function AddCategory({onNewCategory}) {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const submit = (event) =>{
        event.preventDefault(); 
       /*  setCategories((categories) =>{
            return [...categories,inputValue]
        }); */

        setInputValue('') 
        onNewCategory(inputValue.trim())
        /* setCategories( categories => [...categories,inputValue]) */
    }

    return (
        <form  
            onSubmit={submit}
           
        >
            <input
                className="p-3 border-gray-400 rounded-lg"
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={ onInputChange}
            />
        </form>
        
    )
}

 