import React, { Component } from 'react';
import './App.css';

// Sidenav
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// Contents
import Home from './home/Home';
import ToDO from './todo/ToDo';
import Notizen from './notizen/Notizen';
import Erinnerungen from './erinnerungen/Erinnerungen';
import Label from './label/Label';
import Drucken from './drucken/Drucken';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: <Home />,
      title: "Zeitplan"
    }
  }

  chanceContent(selected) {
    switch (selected) {
      case "todo":
        this.setState({
          content: <ToDO />,
          title: "ToDo - Listen"
        })
        break;
      case "notizen":
        this.setState({
          content: <Notizen />,
          title: "Notizen"
        })
        break;
      case "erinnerungen":
        this.setState({
          content: <Erinnerungen />,
          title: "Erinnerungen"
        })
        break;
      case "label":
        this.setState({
          content: <Label />,
          title: "Labels"
        })
        break;
      case "drucken":
        this.setState({
          content: <Drucken />,
          title: "Drucken"
        })
        break;
      default:
        this.setState({
          content: <Home />,
          title: "Zeitplan"
        })
        break;
    }
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            {this.state.title}
          </header>

          <SideNav onSelect={(selected) => this.chanceContent(selected)} >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <i>H</i>
                </NavIcon>
                <NavText>
                  Home
                </NavText>
              </NavItem>
              <NavItem eventKey="todo">
                <NavIcon>
                  <i>T</i>
                </NavIcon>
                <NavText>
                  ToDo
                </NavText>
              </NavItem>
              <NavItem eventKey="notizen">
                <NavIcon>
                  <i>N</i>
                </NavIcon>
                <NavText>
                  Notizen
                </NavText>
              </NavItem>
              <NavItem eventKey="erinnerungen">
                <NavIcon>
                  <i>E</i>
                </NavIcon>
                <NavText>
                  Erinnerungen
                </NavText>
              </NavItem>
              <NavItem eventKey="label">
                <NavIcon>
                  <i>L</i>
                </NavIcon>
                <NavText>
                  Label
                </NavText>
              </NavItem>
              <NavItem eventKey="drucken">
                <NavIcon>
                  <i>D</i>
                </NavIcon>
                <NavText>
                  Drucken
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>

          <div className="content" >
            {this.state.content}
          </div>

          <div className="Footer" >
          </div>
        </div>
    );
  }
}

export default App;
