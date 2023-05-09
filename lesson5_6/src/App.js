import { Route,  Routes, useNavigate } from "react-router-dom"; 
import './App.css';
import { Container } from './components/Container';
import { NotFound } from "./components/NotFound";
import { AddFeedback, Bug, Edit, Home } from "./Pages";
import All from "./Pages/All";


function App() {
  return (
  <>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/comments" element={<Bug/>}/>
  <Route path="/addfeedback" element={<AddFeedback/>}/>
  <Route path="/edit" element={<Edit/>}/>
  <Route path="/NotFound" element={<All/>}/>
  {/* <Route path="/" element={<Home/>}/> */}
  {/* <Route path="/" element={<Home/>}/> */}
  <Route path="*" element={<NotFound/>}/>
  </Routes>
  </>
  );
}

export default App;
