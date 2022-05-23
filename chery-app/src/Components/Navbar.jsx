import React from "react";

const Navbar = () =>{
    return (
        <section ClassNameName="navbar">
        <div ClassName="container">
            <img ClassName="logo" src="assets/logo.svg"/>
            <div ClassName="location">
                <span ClassName="city"> Pune</span>
                <span ClassName="state">Maharashtra, India</span>
            </div>
            <div ClassName="navbar-options">
                <div ClassName="navbar-option">
                    <span ClassName="material-icons"> person_outline</span> Sign In
                </div>
                <div ClassName="navbar-option">
                    <span ClassName="material-icons">
                        shopping_bag
                        </span> Cart
                </div>
                <div ClassName="navbar-option">
                    <span ClassName="material-icons">support</span> Help
                </div>
                <div ClassName="navbar-option">
                    <span ClassName="material-icons">search</span> Search
                </div>
            </div>
        </div>
    </section>
    )
}