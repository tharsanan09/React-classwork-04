import choco from '../assets/choco.jpg'
import HomeImg from '../assets/home.avif'

function Home (){
    return (
       <>
       
                
       <div style={{display: "flex", backgroundImage: `url(${HomeImg})`, backgroundSize: "cover" ,height:"450px"}}>
            <div style={{marginTop: "100px", marginLeft:"150px" ,fontSize: "30px"}}>
                <h2><b>EXPLORE OUR<br/> WIDE VARITY<br/> OF CHOCOLATES.</b></h2><br/>
                  
            </div>
        </div>                    

                    
       </>
    )
}
export default Home;