import React from "react";
import { Link } from "react-router-dom";
import classes from './Home.module.css';
const home = ()=>{
    return (
        <div className={classes.home}>
            
                
            <nav className= {classes.content}>
                {/* <div >
                <Link to="/about" className={classes.abouttag}>About</Link>
                </div>

                <div >
                <Link to="/contact" className={classes.contacttag}>Contact</Link>
                </div>
                
                

                <div >
                <Link to = "/services" className={classes.servicestag} >Services</Link>
                </div>
                
               

                <div >
                <Link to = "/products" className={classes.productstag}>Products</Link>
                </div>
                
                <br/><br/> */}

                </nav>

                <div >
                <h2>HELLO FITNESS FREAKERS!!</h2>
                <p>
                    Here we are providing you best guidance related to fitness.
                </p>

                <img src="https://i.pinimg.com/originals/30/95/43/30954372ed28f61481c9ca5bcf80fa93.jpg" alt="Not Available Now" width="500px" height="500px"></img>


                </div><br />
            
            
            <br />

        </div>
    )
}
export default home;