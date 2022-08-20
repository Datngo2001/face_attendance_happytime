import { Footer1, Footer2 } from "./components"

// props: type(1 or 2)
const Footer = ({type}) => {
    return (
        <>
        {type === 1 ? <Footer1/> : <Footer2/>}
        </>
    )
}

export default Footer;