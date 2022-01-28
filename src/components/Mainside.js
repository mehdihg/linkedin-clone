import React, { useEffect, useState } from "react";
import user from "../images/user.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "./PostModal";
import spinner from "../images/spinner.svg";
import { getArticleApi } from "../actions";
import ReactPlayer from "react-player";
import SharePost from "./SharePost";

const Mainside = () => {
  const state = useSelector((state) => state.userReducer.user);
  const stateLoading = useSelector((state) => state.articleReducer.loading);
  const stateArticle = useSelector((state) => state.articleReducer.articles);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticleApi());
  }, []);

  return (
    <Container>
      <SharePost setShowModal={setShowModal} />
      <div>
        {stateLoading === true && (
          <div className="spinner">
            <img src={spinner} />
          </div>
        )}
        {stateArticle.length > 0 &&
          stateArticle.map((article, key) => {
            return (
              <Article key={key}>
                <SharedAct>
                  <Link to="/home">
                    {state && state.photoURL ? (
                      <img src={article.actor.image} />
                    ) : (
                      <img src={user} />
                    )}
                    <div>
                      <span>{article.actor.title}</span>
                      <span>{article.actor.description}</span>
                      <span>
                        {article.actor.date.toDate().toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                  <button>
                    <BsThreeDots />
                  </button>
                </SharedAct>
                <Description>{article.description}</Description>
                <ImgPost>
                  {!article.sharedImg && article.video ? (
                    <ReactPlayer width={"100%"} url={article.video} />
                  ) : (
                    article.sharedImg && <img src={article.sharedImg} />
                  )}
                </ImgPost>
                <SocialCommentsCount>
                  <li>
                    <button>
                      <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
                      <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
                      <img src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" />
                      <span>{article.comments}</span>
                    </button>
                  </li>
                  <li>
                    <button>{article.comments} comments</button>
                  </li>
                </SocialCommentsCount>
                <SocialActions>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                    </svg>
                    <span>Like</span>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                    </svg>
                    <span>Comments</span>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                    </svg>
                    <span>Share</span>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                    </svg>
                    <span>Send</span>
                  </button>
                </SocialActions>
              </Article>
            );
          })}
      </div>
      <PostModal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
};
const Container = styled.div`
  grid-area: "b";
`;
const ShareStyle = styled.div`
  text-align: center;
  overflow: hidden;
  margin: 0 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;

const Article = styled(ShareStyle)`
  padding: 0;
  margin: 8px;
  overflow: visible;
  @media (max-width: 768px) {
    margin: 8px 0;
  }
`;
const SharedAct = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  position: relative;
  a {
    flex-grow: 1;
    margin-right: 12px;
    overflow: hidden;
    display: flex;
    img {
      width: 48px;
      height: 48px;
    }
    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 8px;
      span {
        text-align: left;

        &:first-child {
          font-size: 14px !important;
          font-weight: 700;
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
          margin: 2px 0;
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    svg {
      font-size: 20px;
    }
  }
`;
const Description = styled.div`
  padding: 0 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
`;
const ImgPost = styled.div`
  margin-top: 8px;
  width: 100%;
  img {
    background-size: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCommentsCount = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  li {
    margin: 0 5px 0 0;
    font-size: 12px;

    button {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      color: #00000099;
      span {
        color: #00000099;
        margin: 0 0 0 2px;
      }
    }
  }
`;
const SocialActions = styled.div`
  margin: 0 16px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #00000099;
    border: none;
    padding-left: 8px !important;
    padding-right: 8px !important;
    min-height: 48px;
    line-height: 40px;
    border-radius: 5px;
    cursor: pointer;
    svg {
      padding: 0 5px 0 0;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

export default Mainside;
