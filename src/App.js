import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  const menuItems = {
    header: [
      { title: "Languages", isOpened: false },
      { title: "Categories", isOpened: false },
      { title: "Create Snippet Board", isOpened: false },
    ],
    footer: [
      { title: "About", isOpened: false },
      { title: "Privacy Policy", isOpened: false },
      { title: "Terms and Conditions", isOpened: false },
    ],
  };

  const snippets = {
    languages: [
      {
        language: "JavaScript",
        snippets: [
          {
            title: "Deploy React App to github pages",
            body:
              "npm install gh-pages \n" +
              'add homepage url into the package.json file \n add the following scripts under "scripts" into same file "predeploy": "npm run build" and "deploy": "gh-pages -d build" \n run command `npm run deploy`',
          },
          {
            title: "Create SearchBar React Component",
            body:
              'function SearchBar() {return (<div className="searchBar"><input type="text" placeholder="Search .."></input></div>) \n} export default SearchBar;',
          },
          {
            title: "Create Javascript Class",
            body:
              'export default class Page { \n constructor() {\n { this.title = "My Page" \n} \n method(argument) { \n <do stuff like in a function...>; \n} \n}',
          },
        ],
      },
      { language: "Bash", snipets: [{ title: "Secure Shell Copy", body: "" }] },
      {
        language: "SQL",
        snipets: [
          {
            title: "CASE WHEN STATEMENT",
            body:
              "SELECT CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 WHEN conditionN THEN resultN ELSE result END as column_name FROM dual",
          },
        ],
      },
      {
        language: "Python",
        snipets: [{ title: 'for x in "banana": print(x)', body: "" }],
      },
    ],
  };

  // const [isOpened, setIsOpen] = useState(false);

  // const showMenu = () => {
  //   isOpened ? <Dropdown /> : null
  // }

  // const showSearch = () => {
  //   alert(
  //     "You have searched for some random code snippet that was never created!"
  //   );
  // };

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const showSearch = () => {
    alert(
      `You have searched for "${searchValue}" code snippet but you don't have one!`
    );
  };

  return (
    <div className="App">
      <Header menuItems={menuItems.header} />
      <Content
        snippets={snippets}
        handleChange={(e) => handleChange(e)}
        showSearch={() => showSearch()}
      />
      <Footer menuItems={menuItems.footer} />
    </div>
  );
}

export default App;
