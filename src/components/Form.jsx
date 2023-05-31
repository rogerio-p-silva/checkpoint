import { useState } from "react"
const Form = () => {
    const [form, SetForm] = useState ({
        name: "",
        email: "",
        gender: "",
    })

    const [emptyValue, SetEmptyValue] = useState(false);

    const handleChange = (e) => {
        let newProp = form;
        newProp[e.target.name] = e.target.value;
        SetForm({ ...newProp })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        // verificando se existem campos não preenchidos
        let emptyValues = Object.values(form).some(obj => obj == "");
        SetEmptyValue(emptyValues)

    }

    return (
        <div>
            <h2>Rogerio Pereira da Silva</h2>
            <h3>Formulário CheckPoint I</h3>

            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label htmlFor="">Nome: </label>
                <input type="text" name="name" onChange={(e) => handleChange(e)}/>
                {emptyValue ? <span className="emptyText"> O campo nome precisa ser preenchido</span> : ""}
                <br />
                <label htmlFor="">E-mail: </label>
                <input type="text" name="email" onBlur={(e) => handleChange(e)}/>
                <br />
                <label htmlFor="">Gênero: </label>
                <select name="gender" onChange={(e) => handleChange(e)}/>
                    <option>-</option>
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outros</option>
                    <option>Prefiro não informar</option>  
                </select>
                <br />
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}


export default Form