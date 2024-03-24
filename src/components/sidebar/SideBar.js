import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMoneyBill,
  faInfoCircle,
  faTruck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3>Admin</h3>
        </div>

        <Nav className="flex-column pt-2">
          <small className="ml-3">Dashboard</small>

          <Nav.Item className="active">
            <Nav.Link href="/status-supir">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Status Supir
            </Nav.Link>
          </Nav.Item>

          {/* <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          /> */}

          <Nav.Item>
            <Nav.Link href="/surat-jalan-supir">
              <FontAwesomeIcon icon={faTruck} className="mr-2" />
              Surat Jalan Supir
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
              Gaji Supir
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              Website
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;