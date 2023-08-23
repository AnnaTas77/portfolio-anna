import React from "react";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Anna Tasheva</p>
        </div>
    );
};

export default Footer;
