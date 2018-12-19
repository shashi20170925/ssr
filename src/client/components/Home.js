import React from "react";
       
const Home = () => {
    return (
        <div>
    <div> I'm in the Home component </div>
<button onClick={()=>{console.log("On click from home")}}>Click me</button>
</div>
    );
};
export default Home;

