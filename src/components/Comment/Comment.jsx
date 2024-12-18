import React from 'react'
import "./Comment.css"

export const Comment = () => {
    return (
        <div className="comments">
            <h2>O que estão dizendo sobre nós</h2>
            <div className="comment">
                {/* Foto e Nome */}
                <div className="comment-header">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="User Avatar"
                        className="comment-avatar"
                    />
                    <span className="comment-name">Nome da Pessoa</span>
                </div>

                {/* Estrelas */}
                <div className="comment-stars">
                    ⭐⭐⭐⭐⭐ {/* Substitua por lógica dinâmica se necessário */}
                </div>

                {/* Comentário */}
                <div className="comment-text">
                    Este é um comentário de exemplo. Aqui, você pode colocar o feedback da pessoa.
                </div>
            </div>
        </div>
    );
};