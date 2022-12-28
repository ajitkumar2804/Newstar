import '../styles/homepage.css'
import  Newsfeed from '../Components/newsfeed'
import Sidebar from './sidebar'


export default function Homepage(){
   return(
    <div className='side'>
    <Sidebar/>
    <Newsfeed/>
    </div>
   )
}