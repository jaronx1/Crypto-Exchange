import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background-color: black;
    color: white;
`;

const Title = styled(motion.h1)`
    font-size: 2rem;
    font-weight: bold;
`;

const NavList = styled(motion.ul)`
    display: flex;
    gap: 1.5rem;
`;

const NavItem = styled(motion.li)`
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: gray;
        }
    }
`;

const SignUpButton = styled(motion.button)`
    background-color: purple;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    &:hover {
        background-color: #4b0082;
    }
`;

const Navbar = () => {
    return (
        <Nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <Title
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                AFS (coming soon)
            </Title>
            <NavList>
                {[
                    { to: "/#features", label: "Features" },
                    { to: "/about", label: "About" },
                    { to: "/cryptocurrencies", label: "Cryptocurrencies" },
                    { to: "/afterburnerx", label: "AfterburnerX" },
                ].map((item, index) => (
                    <NavItem
                        key={item.label}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to={item.to}>{item.label}</Link>
                    </NavItem>
                ))}
            </NavList>
            <SignUpButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Sign Up
            </SignUpButton>
        </Nav>
    );
};

export default Navbar;