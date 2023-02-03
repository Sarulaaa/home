import React from "react";
import Banner from "../components/Banner/Banner";
import Season from "../components/Season/Season";
import Eregtei from "../components/Eregtei/Eregtei";
import Emegtei from "../components/Emegtei/Emegtei";

const Home = () =>{
    return(
        <div>
            <Banner/>
            <Season/>
            <Eregtei/>
            <Emegtei/>
        </div>
    );
};
export default Home