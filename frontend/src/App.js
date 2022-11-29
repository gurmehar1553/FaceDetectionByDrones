import { Login } from "./components/Login";
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
