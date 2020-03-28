import React from 'react';
import './Snippets.css';

function Snippets(props) {
    return (
        <div className="snippets">
        {
            props.snippets.languages[0].snippets.map(snippet => (
                <div className="snippets-single">
                    <div className="snippets-single-title"><strong>{snippet.title}</strong></div>
                    <div className="snippets-single-body">{snippet.body}</div>
                </div>
            ))
        }
        </div>
    )
}

export default Snippets;