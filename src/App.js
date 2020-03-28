import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {

  const menuItems = {
    header: [
      {title: 'Languages'},
      {title: 'Categories'},
      {title: 'Create Snippet Board'},
    ],
    footer: [
      {title: 'About'},
      {title: 'Privacy Policy'},
      {title: 'Terms and Conditions'},
    ]
  };

  const snippets = {
    languages: [
      {language: 'JavaScript',
       snippets: [
         {title: 'Deploy React App to github pages',
          body: 'npm install gh-pages \n'+ 'add homepage url into the package.json file \n add the following scripts under "scripts" into same file "predeploy": "npm run build" and "deploy": "gh-pages -d build" \n run command `npm run deploy`'},
          {title: 'Create SearchBar React Component',
          body: 'function SearchBar() {return (<div className="searchBar"><input type="text" placeholder="Search .."></input></div>) \n} export default SearchBar;'},
          {title: 'Create Javascript Class',
          body: 'export default class Page { \n constructor() {\n { this.title = "My Page" \n} \n method(argument) { \n <do stuff like in a function...>; \n} \n}'}
       ]
      }, 
      {language: 'Bash',
        snipets: [
          {title: 'Secure Shell Copy',
           body: ''
          }
        ]
      }
    ]
  }

  return (
    <div className="App">
      <Header 
        menuItems={menuItems}
      />
      <Content 
        snippets={snippets}
      />
      <Footer 
        menuItems={menuItems}
      />
    </div>
  );
}

export default App;
