import React, {useEffect, useState} from "react";
import api from "../services/api";
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import logoReact from "../assets/logoReact.svg";
import "./Main.css";

export default function Main({match}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get("/devs", {
                headers: {user: match.params.id}
            });
            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id]);

    async function handleLikes(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: {user: match.params.id}
        })
        setUsers(users.filter(user => user._id !== id))
    }

    async function handleDislikes(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {user: match.params.id}
        })
        setUsers(users.filter(user => user._id !== id))
    }

    return (
        <div className="main-container">
            <img src={logoReact} className="react-logo" alt="React logo" />
            <img src={logo} alt="Tindev logo" />
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
                            <div className="buttons">
                                <button type="button" onClick={() => handleDislikes(user._id)}>
                                    <img src={dislike} alt="Dislike button" />
                                </button>
                                <button type="button" onClick={() => handleLikes(user._id)}>
                                    <img src={like} alt="Like button" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="empty">Acabou :(</div>
            )}
        </div>
    )
}
