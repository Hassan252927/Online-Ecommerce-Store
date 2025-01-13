import React from 'react'
import './Footer.css';
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <footer className="footer-main-area">
                <div className="container">
                    <div className="footer-info">
                        <p>Copyright &copy; {date} Meal Hut made by Muhammad Hassan</p>
                    </div>
                </div> 
            </footer>   
        </>
    )
}

export default Footer
