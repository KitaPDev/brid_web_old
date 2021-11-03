import React from "react";
import "./NavBar.css";

import { withTranslation } from "react-i18next";

import {
  Button,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleNavBar = this.toggleNavBar.bind(this);
  }

  toggleNavBar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { t } = this.props;

    let { isOpen } = this.state;

    return (
      <Navbar color="white" light expand="xl">
        <NavbarBrand href="/">
          <img id="navbar-brand" src="/logo-navbar.png" alt="logo"></img>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavBar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                {t("Modules")}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>...Modules</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                {t("Industries")}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>...Industries</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink to="/news">{t("News")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/support">{t("Support")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/careers">{t("Careers")}</NavLink>
            </NavItem>
            <NavItem id="contact-us">
              <Button id="btn-contact-us">
                {t("Contact Us")}
                <NavLink to="/contact-us"></NavLink>
              </Button>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                {t("Language")}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>TH</DropdownItem>
                <DropdownItem>EN</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withTranslation()(withRouter(NavBar));
