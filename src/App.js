import Navbar from './Components/navbar';
import React, { useState } from 'react'
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'



const App=(props)=>{
   
  const [mode, setmode] = useState('light');
  const [progress, setProgress] = useState(0);
  const ThemeToggle = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = 'black'
      document.body.style.Color = 'white'      
      setmode('dark');
    }
    else {
      document.body.style.backgroundColor = 'white'
      document.body.style.Color = 'black'
     setmode('light');
    }
  }
 
  let pageSize = 6;  
  let apiKey = process.env.REACT_APP_NEWS_API;  
  
    return (
      <>
        <div>          
          <Router>
            <Navbar ThemeToggle={ThemeToggle} mode={mode} />

            <LoadingBar
              color='#efebeb'
              progress={progress}   
              height={2.3}           
            />
          
            <Routes>
              <Route exact path='/'
                element={<News setProgress={setProgress}
                apiKey = {apiKey}
                  pageSize={pageSize}
                  mode={mode}
                  country='in'
                  category='general'
                  key='general'
                  
                />}
              />
              <Route exact path='/business'
                element={<News setProgress={setProgress}
                apiKey = {apiKey}
                  pageSize={pageSize}
                  mode={mode}
                  country='in'
                  category='business'
                  key='business'
                />}
              />
              <Route exact path='/entertaiment'
                element={<News setProgress={setProgress}
                apiKey = {apiKey}
                  pageSize={pageSize}
                  mode={mode}
                  country='in'
                  category='entertaiment'
                  key='entertaiment'
                />}
              />
              <Route exact path='/general'
                element={<News setProgress={setProgress}
                apiKey = {apiKey}
                  pageSize={pageSize}
                  mode={mode}
                  country='in'
                  category='general'
                  key='general'
                />}
              />
              <Route exact path='/health'
                element={<News setProgress={setProgress}
                apiKey = {apiKey}
                  pageSize={pageSize}
                  mode={mode}
                  country='in'
                  category='health'
                  key='health'
                />}
              />
              <Route exact path='/science'
                element={<News setProgress={setProgress}
                apiKey = {apiKey}
                  pageSize={pageSize}
                  mode={mode}
                  country='in'
                  category='science'
                  key='science'
                />}
              />
              <Route exact path='/technology'
                element={<News setProgress={setProgress}
                apiKey = {apiKey}
                  pageSize={pageSize}
                  mode={mode}
                  country='in'
                  category='technology'
                  key='technology'
                />}
              />
            </Routes>
          </Router>
        </div>
      </>
    )
  
}


export default App;

// TODO Making this using function component and making textutils using class based component
//TODO make trending news component slider like image slider in main page
