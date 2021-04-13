import Header from  './components/header'
import {useState,useEffect} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Tasks from './components/tasks.js'
import AddTask from './components/AddTask.js'
import Footer from './components/footer.js'
import About from './components/about.js'

function App() {
  const [showaddform,setshowaddform] = useState(true)

  const [tasks,setTasks] = useState([])

  useEffect(() => {
    const gettasks = async () => {
      const tasksfromserver = await fetchTasks()
      setTasks(tasksfromserver)
    }
    

    gettasks()
   
     
  },[])

  const fetchTasks = async () => {

    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)

    return data
  }



 const  Addtask = async(task) => {
   const response = await fetch('http://localhost:5000/tasks',{
     method:'POST',
     headers:{
      'Content-type':'application/json',
    },
     body:JSON.stringify(task),
   })

   const data = await response.json()

   setTasks([...tasks,data])

  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = {id, ...task}
  // setTasks([...tasks,newTask])

}

const  Deletetask = async(id)=> {
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'Delete'})

  
  setTasks(tasks.filter((task) => task.id !==id));
}


function ToggleReminder(id){
   setTasks(tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder} : task))
}



return (
  <Router>
    <div className="container ">
      
      <Header title='Task Tracer' onAdd={() => setshowaddform(!showaddform)} showAdd={showaddform}/>
      <Route path='/' exact render = {(props) => (
        <>
        {showaddform && <AddTask onAdd={Addtask} />}
        <Tasks tasks={tasks} onDelete={Deletetask} onToggle={ToggleReminder}/>
          
        </>
      )} />
      
      <Route path='/about' component={About}/>
      <Footer/>
    </div>
    </Router>
  )
}



export default App;
