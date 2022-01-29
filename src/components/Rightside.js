import React from 'react';
import { Link } from 'react-router-dom';
import feed from '../images/feed-icon.svg';
import righticon from '../images/right-icon.svg'
import styled from 'styled-components';

const Rightside = () => {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed</h2>
                    <img src={feed} />
                    </Title>
                    <FeedList>
                        <li>
                            <Link to='/home'>
                                <Avatar/>
                            </Link>
                            <div>
                                <span>#Linkedin</span>
                                <button>Follow</button>
                            </div>
                        </li>
                        <li>
                            <Link to='/home'>
                                <Avatar/>
                            </Link>
                            <div>
                                <span>#Video</span>
                                <button>Follow</button>
                            </div>
                        </li>
                    </FeedList>
                    <Recommendation>
                        <Link to='/home'>
                           <span>View all recommendations</span>
                            <img src={righticon} />
                        </Link>
                        
                    </Recommendation>
            </FollowCard>
            <BannerCard>
                <Link to='/home'>
                    <img src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'/>
                </Link>
            </BannerCard>
        </Container>
    );
};
const Container=styled.div`
grid-area:'c';
@media (max-width:768px){
margin-bottom:80px;
}
`
const FollowCard=styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
  padding: 12px;
`
const Title=styled.div`
display: flex;
justify-content:space-between;
align-items:center;
h2{
    font-size:16px;
    color: rgba(0,0,0,0.6);
    font-family:  'Roboto',-apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
}
`
const FeedList=styled.ul`
margin-top:16px;
li{
    display: flex;
    align-items:center;
    margin: 12px 0;
    font-size:14px;
}
li div{
    display: flex;
    flex-direction:column;
}
li div span{
    text-align:left;
    font-weight:600;
    margin-bottom:5px;
}
li div button{
    background-color:transparent;
    color:rgba(0,0,0,0.6);
    box-shadow:inset 0 0 0 1px rgba(0,0,0,0.8);
    padding: 5px 12px;
    border-radius:15px;
    font-size:14px;
    outline:none;
    cursor:pointer;
}
`
const Avatar=styled.div`
background-image:url('/images/hashtag.png') ;
width: 48px;
height: 48px;
background-position:center ;
background-repeat:none ;
background-size:cover ;
margin-right:8px;
border:6px solid #b6c5e3;
border-radius:50%;
`
const Recommendation=styled.div`
display: flex;
justify-content:flex-start;
align-items:center;
margin: 4px 0 0 0;
a{
    display: flex;
    align-items:center;
}
span{
    color:#0a66c2;
    margin-right:5px ;
    font-size:14px;
}
`;
const BannerCard=styled(FollowCard)`
padding:0;
`;
export default Rightside;