import './MyForm.css'
import {useState} from 'react'

const MyForm = () => {

    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log('Enviando formulário')
        email ? console.log(email) : alert('Campo email vazio') 
        nome ? console.log(nome) : alert('Campo nome está vazio')
        
        

        setEmail("")
        setNome("")
    }

    return (
        <div>
            <form  className="card">
                <label>
                    <span>Nome:</span>
                    <input className="txtInput" type="text"
                        placeholder="Insira seu nome"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}/>
                </label>
                <label>
                    <span>e-mail:</span>
                    <input className="txtInput" type="email"
                    placeholder="Insira seu e-mail" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                </label>
                <label>
                    <input id="btn" type="submit" onClick={handleSubmit}/>
                </label>

            </form>
        </div>
    )
}

export default MyForm;