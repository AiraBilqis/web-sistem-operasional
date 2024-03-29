import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import StatusSupir from '../../Pages/StatusSupir'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
class Content extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <Router>
          <Routes>
            <Route exact path="/status-supir" element={<StatusSupir />} />
          </Routes>
        </Router>
      </Container>
    );
  }
}

export default Content;