import React from "react";
import _ from "lodash";

function Snippets(props) {
  return (
    <div className="snippets">
      {console.log(
        props.snippets.languages.filter(
          (item) => item.language === "JavaScript"
        )[0].snippets
      )}
      {props.snippets.languages
        .filter((item) => item.language === "JavaScript")[0]
        .snippets.map((snippet) => (
          <div className="snippets-single" key={snippet.title}>
            <div className="snippets-single-title">
              <strong>{snippet.title}</strong>
            </div>
            <div className="snippets-single-body">{snippet.body}</div>
          </div>
        ))}
    </div>
  );
}

export default Snippets;
