import Newsfeed from '../newsfeed'
import '../styles/homepage.css'
import Sidebar from './sidebar'


export default function Homepage(){
   return(
    <div className="side">
    <Sidebar/>
    <Newsfeed/>
    </div>
   )
}