//Components
import Profile from './Components/Profile/Profile';
import Links  from './Components/Links/Links';
import Technologies  from './Components/Technologies/Technologies';
import Experiences  from './Components/Experiences/Experiences';
import Education  from './Components/Education/Education';
import Title  from './Components/Title/Title';
import ProjectCards from './Components/ProjectCards/ProjectCards';
import PostCards  from './Components/PostCards/PostCard';

//Styles
import './App.css'
import './reset.css'

function App() {
 
  return (
    <div className="App">
      <div className="portfoilio">
        <main className="main">
          <Profile/>  
          <Links/>
          <Technologies/>
          <Experiences/>
          <Education/>
        </main>
        <aside className="aside">
          <Title/>
          <ProjectCards/>
          <Title/>
          <PostCards/>
        </aside>
      </div>
    </div>
  )
}

export default App;
