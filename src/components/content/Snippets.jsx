import React from "react";
const _ = require("lodash");

function Snippets(props) {
  return (
    <div className="snippets">
      {console.log(
        props.snippets.languages.find((item) => item.language === "JavaScript")
          .snippets
      )}
      {props.snippets.languages
        .find((item) => item.language === "JavaScript")
        .snippets.map((snippet) => (
          <div className="snippets-single" key={snippet.title}>
            <div className="snippets-single-title">
              {/* <strong>{_.get(snippet, title, 'No title'}</strong> */}
              <strong>{snippet.title}</strong>
            </div>
            <div className="snippets-single-body">{snippet.body}</div>
          </div>
        ))}
    </div>
  );
}

export default Snippets;
