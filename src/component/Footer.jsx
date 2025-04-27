function Footer() {
  return (
    <>
    <section id="contact">
        <footer>
            <div className="text-white bg-green-800" style={{display: "flex", gap:"100px", height: "200px", paddingTop: "40px",backgroundColor:"coral", color: "white"}}><br/>
                
                <div>
                    <p className="text-4xl"><b>Choco</b></p>
                    <p className="text-2xl">Stanly Road, Jaffna.<br/>Srilanka</p>
                    <p className="text-2xl">0771234567</p>
                    <p className="text-2xl">Choco@store.com</p>

                </div>

                <div>
                    <p className="text-4xl"><b>Contact Details</b></p>
                    <p className="text-2xl">Stanly Road, Jaffna.<br/>Srilanka</p>
                    <p className="text-2xl">0771234567</p>
                    <p className="text-2xl">Choco@store.com</p>
                </div>
                <div>
                    <p className="text-4xl"><b>Quick Links</b></p>
                    <p className="text-2xl">About Us</p>
                    <p className="text-2xl">Contact Us</p>
                    <p className="text-2xl">Other Shopes</p>
                    <p className="text-2xl">Terms & Conditions</p>
                </div>

                <div>
                    <p className="text-4xl"><b>Our Products</b></p>
                    <p className="text-2xl">Dairy Milk</p>
                    <p className="text-2xl">Snickers</p>
                    <p className="text-2xl">Dark Choco</p>
                    <p className="text-2xl">Kit Kat</p>
                </div>

            </div>
            <hr/>
           
        </footer>
        <div style={{display:"flex",marginLeft:"150px"}}>

            <div>
                <p className="text-2xl pl-30">&copy; Copy Write@Choco</p>
            </div>

            <div style={{marginLeft:"500px"}}>
                <p className="text-2xl">Privicy Policy</p>
            </div>
        </div>
        <hr />
    </section>
    </>
  );
}
export default Footer;