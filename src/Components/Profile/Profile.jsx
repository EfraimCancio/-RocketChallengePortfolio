import './Profile.css';
import Mario from '../../images/mario.jpg';


const Profile = () => {
    return (
        <div className="profile-container">
            <img className="profile-img" src={Mario} alt="Avatar"/>
            <h2 className="profile-title">Efras Dev</h2>
            <article className="profile-description">Full Stack Developer</article>
        </div>
    )
}

export default Profile;