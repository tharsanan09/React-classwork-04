import Home from "../page/Home";
import Footer from "./Footer";


function Navbar (){

    return(
        <>
        <nav>
            <div style={{ display:"flex", backgroundColor:"lightpink", height:"60px", width:"100%" }} >
            <img style={{ height:"30px",width:"45px", marginTop:"10px", marginLeft:"20px"}} src="./src/assets/choco.jpg" alt="logo" />
            
            <ul style={{marginLeft:"700px", display:"flex"}}>
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
                </div>
        </nav>

        </>

    )

}
export default Navbar;
