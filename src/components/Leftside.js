import React from "react";
import { Link } from "react-router-dom";
import widget from "../images/widget-icon.svg";
import item from "../images/item-icon.svg";
import plus from "../images/plus-icon.svg";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Leftside = () => {
  const state = useSelector(state => state.userReducer.user)

  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />

          <Link to="/home">
            <Photo />
            <LinkTitle>Welcome,{state &&state.displayName? state.displayName:'there'}!</LinkTitle>
          </Link>
          <Link to="/home">
            <AddPhotoText>Add a photo</AddPhotoText>
          </Link>
        </UserInfo>
        <Widget>
          <Link to="/home">
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src={widget} />
          </Link>
        </Widget>
        <Item>
          <span>
            <img src={item} />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommuintyCard>
        <CommunityCardSect>
          <CommunityText>
            <span>Groups</span>
            <span>Events</span>
            <span>Follow Hashtags</span>
          </CommunityText>
          <img src={plus} />
        </CommunityCardSect>
        <CommunityDiscoverSect>
          <span>Discover more</span>
        </CommunityDiscoverSect>
      </CommuintyCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: "a";
`;
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBackground = styled.div`
  background: url("/images/card-bg.svg");

  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  width: 72px;
  height: 72px;
  box-shadow: none;
  background-image: url("/images/photo.svg");
  background-color: white;
  background-repeat: no-repeat;
  background-clip: content-box;
  background-position: center;
  background-size: 60%;
  margin: -38px auto 12px;
  border: 2px solid white;
  border-radius: 50%;
`;
const LinkTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-size: 12px;
`;
const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span {
        font-size: 12px;
        line-height: 1.3;
        align-items: center;
        font-weight: 600;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;
const Item = styled.div`
  border-color: rgba(0, 0, 0, 0.8);
  padding: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 12px;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const CommuintyCard = styled(ArtCard)`

`;
const CommunityText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span{
    color:#0a66c2;

  }
`;
const CommunityCardSect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  span {
    font-size: 12px;
    padding: 10px 0 0 0;
    font-weight: 600;
  }
`;
const CommunityDiscoverSect = styled.div`
display: flex;
justify-content:center;
padding: 16px 12px;
cursor: pointer;
&:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
span{
  font-size:14px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;

}
`;
export default Leftside;
