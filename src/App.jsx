//Components
import Profile from './Components/Profile/Profile'
import Links  from './Components/Links/Links'

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
        </main>
        <aside className="aside">

        </aside>
      </div>
    </div>
  )
}

export default App
