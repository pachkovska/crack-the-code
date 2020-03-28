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

  return (
    <div className="App">
      <Header 
        menuItems={menuItems}
      />
      <Content />
      <Footer 
        menuItems={menuItems}
      />
    </div>
  );
}

export default App;
