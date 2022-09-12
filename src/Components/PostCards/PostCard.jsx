import React from 'react';
import Mario from '../../images/mario.jpg';
import './PostCard.css';

const PostCard = () => {
  return (
    <div className="post-container">
        <img src={Mario} alt="Avatar do post" className="post-img" />
        <div className="post-text">
          <div className="post-title">
            <h4>Erro adb devices no Genymotion e Android Studio (React Native)</h4>
            <p>2 anos atrás</p>
          </div>
          <div className="post-content">
            <p className="post-mensage">
              Erro adb devices no Genymotion e Android Studio (React Native)
            </p>
            <ul className="hash">
              <li>#efra-dev</li>
              <li>#dev-efras</li>
              <li>#efraim-fonseca</li>
              <li>#efra</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default PostCard;