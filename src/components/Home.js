import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Header from './Header';
import Leftside from './Leftside';
import Mainside from './Mainside';
import Rightside from './Rightside';
import { Navigate } from "react-router-dom";
const Home = () => {
    const state=useSelector(state=>state.userReducer.user)




    return (

        <HomePage>
            {!state && <Navigate to='/' replace/>}
           <Header />
           <ContentSect>
                <Leftside/>
                <Mainside/>
                <Rightside/>
           </ContentSect>
          
        </HomePage>
    );
};
const HomePage=styled.div`
background-color:#eeeeeee6;
min-height:100vh;
`
const ContentSect=styled.div`
width: 1128px;

margin: 0 auto;
display: grid;
grid-template-areas:'a' 'b' 'c';
grid-template-columns:minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
row-gap:25px;
column-gap:25px;
padding: 80px 0 0 0;
@media (max-width:1024px){

    width: 90%;
}
@media (max-width:768px){
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 80px 0 0 0;
    width: 100%;
}
`
export default Home;