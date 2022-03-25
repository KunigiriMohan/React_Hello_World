import React from "react";
import './Dashboard.css';

class Dashboard extends React.Component{
    render(){
        return(
            <>
            
            <body>
            <header>HEADER - Sample Flex box</header>
                <div class='main-content'>
                    <div class='left-content'><p>Left Content</p></div>
                    <div class='middle-content'>
                        <div class='top-content'></div>
                        <div class='middle1-content'></div>
                        <div class='bottom-content'></div>
                    </div>
                    <div class='right-content'><p>Right Content</p></div>
                </div>
                <footer>Footer</footer>
            </body>
            </>
        );

    }
}
export default Dashboard