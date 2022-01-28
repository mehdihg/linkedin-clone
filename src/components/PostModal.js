import styled from "styled-components";
import { MdClose } from "react-icons/md";
import user from "../images/user.svg";
import { useState  } from "react";
import {  connect, useDispatch, useSelector  } from "react-redux";
import firebase from 'firebase'
import ReactPlayer from 'react-player'
import { postArticleApi } from "../actions";
const PostModal = ({ setShowModal, showModal,...props}) => {
  const [editorChange, setEditorChange] = useState("");
  const [shareImg, setShareImg] = useState("");
  const [sharevideo, setSharevideo] = useState("");
  const [switchAssets,setSwitchAssets]=useState('image')

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image,the file is ${typeof image}`);
      return;
    }
    setShareImg(image);
  };
  function postArticle(e){
    e.preventDefault();
  

  
 

    if(e.target !== e.currentTarget){
      
      return;
    }
    const payload={
      image:shareImg,
      video:sharevideo,
      user:props.user,
      description:editorChange,
      timestamp:firebase.firestore.Timestamp.now()
    }
    props.postArticle(payload)
    reset()
  }
  const reset=(e)=>{
    setEditorChange('')
    setShareImg('')
    setSharevideo('')
    setShowModal(false)
  }
  const dispatch = useDispatch()
  
const state = useSelector(state => state.userReducer.user)


  return (
    <>
      {showModal === true && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={() => setShowModal(false)}>
                <MdClose />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {
                state&&state.photoURL ?
                <>
                <img src={state.photoURL} />
                <span>{state.displayName}</span>
                </>
                :
                <>
                <img src={user} />
                <span>Name</span>
                </>
                }

              </UserInfo>
              <TextEditor
                placeholder="what do you want to share"
                autoFocus={true}
                value={editorChange}
                onChange={(e) => setEditorChange(e.target.value)}
              ></TextEditor>
              <UploadImg>
                
                {
                  switchAssets ==='image' &&   
                  <>              
                  <input
                  type="file"
                  accept="image/gif , image/jpeg , image/gif , image/png , img/svg"
                  name="image"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />

                <label htmlFor="file">Select an image to share</label>
                
                {shareImg && <img src={URL.createObjectURL(shareImg)} />}
                </>
                }
                {
                switchAssets ==='video' && 
                <>
                <input
                  type="text"
                  placeholder="Please input a video link"
                  onChange={(e)=>setSharevideo(e.target.value)}
                  className="videoInput"
                />

                {sharevideo && <ReactPlayer width='100%' url={sharevideo} />}
                </>
                }

                

                
              </UploadImg>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton onClick={()=>setSwitchAssets('image')}>
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="photosvg"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                  
                </AssetButton>
                <AssetButton onClick={()=>setSwitchAssets('video')}>
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="videosvg"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                  </svg>
                  
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton >
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
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>
              <PostButton disabled={!editorChange} onClick={(event)=>postArticle(event)} >Post</PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.8);
  animation: modalshow 0.3s;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 90%;
  margin: 0 auto;
  position: relative;
  top: 32px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
`;
const Header = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 16px;
    font-weight: 600;
  }
  button {
    width: 40px;
    height: 40px;
    color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.15);
    svg {
      font-size: 24px;
      pointer-events: none;
    }
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 24px;
  overflow: auto;
`;
const TextEditor = styled.textarea`
  flex-grow: 1;
  min-height: 100px;
  padding: 5px;
  resize: none;
  margin: 0 0 10px 0;
  border: 1px solid rgba(0,0,0,0.3);
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  img,
  svg {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    margin-left: 5px;
  }
`;
const SharedCreation = styled.div`
  display: flex;
  padding: 16px 20px;
`;
const AttachAssets = styled.div`
  display: flex;
  padding-right: 8px;
  button {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    label {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const AssetButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.15);
  svg {
    fill: rgba(0, 0, 0, 0.6);
  }
  span {
    color: rgba(0, 0, 0, 0.6);
  }
`;
const UploadImg = styled.div`
input{
  width: 100%;
  border: 1px solid rgba(0,0,0,0.3);
  padding: 10px 5px;
}
  img {
    width: 100%;
    margin: 8px 0 0 0;
  }
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  button {
    display: flex;
    align-items: center;
    height: 40px;
    svg {
      margin-right: 8px;
    }
  }
`;
const PostButton = styled.button`
  min-width: 60px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,0.6)" : "#0a66c2" };
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "rgba(0,0,0,0.6)" : "#004182"};
  }
`;
const mapStateToProps=state=>{
  return {
    user:state.userReducer.user
  }
}
const mapDispatchToProps=dispatch=>({
  postArticle:(payload)=>dispatch(postArticleApi(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(PostModal) ;
