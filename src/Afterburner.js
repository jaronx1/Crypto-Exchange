import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import PaymentMethod from "./PaymentMethod";
import About from "./About";
import Cryptocurrencies from "./Cryptocurrencies";
import styled from "styled-components";
import AfterburnerX from "./AfterburnerX";
import Footer from "./footer";

const PaymentMethodsSection = styled.div`
    background-color: #fff;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    border-top: 2px solid #ddd;
`;

const Afterburner = () => {
    const paymentMethods = [
        { src: "/Multi%20Card%20Checkout%20Logo.png", alt: "Card Networks", width: 150, height: 45 },
        { src: "/Apple%20Pay.jpg", alt: "Apple Pay", width: 75, height: 55 },
        { src: "/Google%20Pay.png", alt: "Google Pay", width: 70, height: 45 }
    ];

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={
                    <>
                        <HeroSection />
                        <Features />
                        <PaymentMethodsSection>
                            {paymentMethods.map((method, index) => (
                                <PaymentMethod key={index} method={method} />
                            ))}
                        </PaymentMethodsSection>
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/afterburnerx" element={<AfterburnerX />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default Afterburner;