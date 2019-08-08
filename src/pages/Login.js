import React from "react";
import "./Login.css"
import logo from "../assets/logo.svg";

export default function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={ logo } alt="Tindev logo" />
                <input placeholder="Digite seu usuário do GitHub" />
                <button type="submit">Enviar</button>
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
