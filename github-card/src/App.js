import React from 'react';
import { Container } from 'reactstrap'
import CardComponent from "./component/CardComponent";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Container>
        <CardComponent />
      </Container>
    )
  }
}

export default App;
