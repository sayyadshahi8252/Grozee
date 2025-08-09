import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.about}>
                    <h3>Grozee</h3>
                    <p>
                        Welcome to Grozee! We are dedicated to providing the freshest, highest-quality groceries delivered right to your doorstep. Our mission is to simplify your shopping experience while supporting local farmers and producers.
                    </p>
                </div>

                <div className={style.links}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className={style.contactInfo}>
                    <h4>Contact</h4>
                    <p>Email: support@Grozee.com</p>
                    <p>Phone: +91 12345 67890</p>
                    <p>Address: 123 Book St, Knowledge City, India</p>
                </div>
            </div>

            <div className={style.bottomBar}>
                <p>© {new Date().getFullYear()} Grozee. All rights reserved.</p>
            </div>
        </footer>
    );
}
