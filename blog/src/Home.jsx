import { useAuthContext } from "../hooks/useAuthContext"
import "./styles/Home.css"


function Chat(){
    return(
        <>
            <a href="">
                <div id="chat-link">
                    <img src="./profile-icon.svg" alt="" className="icon" id="profile-icon"/>
                    <h3>User Name</h3>
                </div>
            </a>
        </>
    )
}

function Post(){
    return(
        <>
            <div id="post">
                <div id="profile-info">
                    <img src="./profile-icon.svg" alt="" className="icon" id="profile-icon"/>
                    <h3>User Name</h3>
                </div>
                <p id="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt ipsam veniam? Totam, iusto consectetur nam vero debitis accusamus. Nisi nulla magnam sunt sit, reprehenderit tempore deserunt quam voluptate ducimus.</p>
                <div id="interactions">
                    <a href=""><img src="./heart-icon.svg" alt="" className="icon" id="heart-icon"/></a>
                    <a href=""><img src="./comment-icon.svg" alt="" className="icon" id="comment-icon"/></a>
                    <a href=""><img src="./save-icon.svg" alt="" className="icon" id="save-icon"/></a>
                    <a href=""><img src="./share-icon.svg" alt="" className="icon" id="share-icon"/></a>
                </div>
            </div>
        </>
    )
}

function Home(){
    const {user} = useAuthContext()

    return(
        <>
            <div id="home-container">
                <div id="chat-bar">
                    <h1 id="chats-title">Chats <img src="./message-icon.svg" alt="" className="icon" id="message-icon" /></h1>
                    <Chat></Chat>
                    <Chat></Chat>
                    <Chat></Chat>
                    <Chat></Chat>
                    <Chat></Chat>
                </div>
                <div id="posts">
                    <h1 id="post-title">See whats new in Bloguie!</h1>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </div>
            </div>
        </>
    )
}

export default Home