import logo from "../assets/logo.png"

export default function Footer() {
    return (
        <footer style={{backgroundColor: "#000000", color: "#FFFFFF"}}>
            <img src={logo} alt="logo" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </footer>
    )
}