import { useState } from "react"


export const useForm = (initialState={})=> { // lo inicializo a un objeto vacio
    const [values, setValues] = useState(initialState)

    const reset= () =>{setValues(initialState)}

    const handleInputChange = ({ target }) => {
        //desectruturamos el e y cogemos el target para no tener que usar e.target
        setValues({
          ...values, //traemos todo el objeto y sobreescribimos lo que nos interesa
          [target.name]: target.value,
        });
      };
      return [values, handleInputChange, reset ]
}
