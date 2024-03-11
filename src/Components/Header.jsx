import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cart } from "../Context/Context";

const Header = () => {
  const {cart}=useContext(Cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-2 fixed-top ">
      <Container fluid>
        <Navbar.Brand href="#" className="font-bold ">
          Shop<span className="text-sky-600">Zone</span>
        </Navbar.Brand>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/ShopingKart-react/"}>
          <h5 className="mt-1.5 lg:hidden underline">Home</h5>
        </Link>
        <div className="flex">
          <Link to={"/cart"}>
            <FaShoppingCart size={30} className="text-black lg:hidden" />
          </Link>
          <span className="font-bold text-red-600 lg:hidden">{cart.length}</span>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="me-auto  lg:w-[500px] w-full">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Link
            className="me-4"
            style={{ textDecoration: "none", color: "black" }}
            to={"/"}
          >
            <h5 className="mt-1.5 lg:flex md:hidden hidden underline ">Home</h5>
          </Link>
          <Link to={"/cart"}>
            <FaShoppingCart
              size={30}
              className="text-black lg:flex md:hidden hidden"
            />
          </Link>
          <span className="font-bold text-red-600 lg:flex md:hidden hidden">
            {cart.length}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
