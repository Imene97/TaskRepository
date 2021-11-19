import React from "react";
import SubmitTask from "./SubmitTask";
import FrPage from "./FrPage";
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Link
} from "react-router-dom";
 
function App() {

 return (
     <div className="App">
      <Router>
        <Routes>
          <Route path="/FR" element={<FrPage/>}> </Route>
          <Route path="/DZ" element={<SubmitTask/>}> </Route>
        </Routes>
      </Router>
     </div>
 );
}
 
export default App;