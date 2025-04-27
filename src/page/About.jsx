import choco from "../assets/choco.jpg";


function About() {
  return (

    <>
    
    <section id="about" style={{height: "600px", paddingTop: "30px",backgroundColor:"pink" }} >
            
            <div style={{textAlign: "center", paddingTop: "100px"}}>
                <p ><b>ABOUT US</b></p>
                <p ><b>HISTORY AND TRADITION <br/>OF OUR CHOCOLATES</b></p>
                     
                
                
            </div>
            <div  style={{display: "flex", gap: "90px", marginLeft: "150px"}}>
                <div>
                   <img src={choco} style={{height: "300px"}} />
    
                </div>
                <div>
                  <p className="text-xl">Mauris rhoncus orci in imperdiet placerat.<br/> Vestibulum euismod nisl suscipit ligula<br/> volutpat, a feugiat urna maximus.<br/> Cras massa nibh, tincidunt</p> <br/> 
                    <p className="text-xl">Donec et nibh maximus, congue est eu, mattis.<br/> Praesent ut quam quis quam venenatis fringilla.<br/> Morbi vestibulum id tellus commodo mattis.<br/> Aliquam erat volutpat. Aenean accumsan id<br/> mi nec semper. Lorem ipsum. </p><br/>
                    
                </div>
            </div>
         </section>
    </>    

  );
}
export default About;