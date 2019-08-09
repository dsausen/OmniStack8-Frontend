import React, {useState} from "react";
import "./Login.css"
import api from "../services/api";
import logo from "../assets/logo.svg";
import logoReact from "../assets/logoReact.svg";

export default function Login({history}) {
    const [username, setUsername] = useState("");
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post("/devs", {
            username
        });
        const {_id} = response.data;
        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={ logoReact } className="react-logo" alt="React logo"/>
                <img src={ logo } alt="Tindev logo" />
                <input
                    placeholder="Digite seu usuário do GitHub"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
                <a
                    className="github-link"
                    href="https://github.com/dsausen"
                    target="_blank"
                    rel="noopener noreferrer">
                    Stay woke
                </a>
            </form>
        </div>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={ logo } className="App-logo" alt="Tindev logo" />
        //         <p>Work in progress. Stay tuned.</p>
        //         <a className="App-link" href="https://github.com/dsausen" target="_blank" rel="noopener noreferrer">Get woke</a>
        //     </header>
        // </div>
    );
}
