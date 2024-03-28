import FeedbackItem from "./component/FeedbackItem";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStacts from "./component/FeedbackStacts";
import FeedbackForm from './component/FeedbackForm'
import {BrowserRouter as Router, Route,Routes, NavLink} from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import AboutIconLink from './component/AboutIconLink';
import Card from './component/share/Card';
import Post from './component/Post';
import { FeedbackProvider } from './context/FeedbackContext';


function App(){
 
    return (
        <FeedbackProvider>
        
        <Router>
        <Header text="Feedback UI" />
        <Routes>
            <Route exact path='/'
            element={
                <>
                <FeedbackForm />
            <FeedbackStacts />
            <FeedbackList/>
            
                </>
            }
            >
            
            </Route>
            <Route path='/about' Component={AboutPage}/>
            <Route path='/post/*' Component={Post}/>
        </Routes>
        <Card>
            <NavLink to='/' activeClassName='active'>
                Home
            </NavLink>
            <NavLink to='/about' activeClassName='active'>
                About
            </NavLink>

        </Card>
        <AboutIconLink/>
        </Router>
        </FeedbackProvider>
    )
}

export default App;






























// import Task from "./component/task";

// function App(){
    
//     return (
//         <>
//         <Task/>
//         </>
       
//     )
// }

// export default App;