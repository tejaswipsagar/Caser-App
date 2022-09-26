import React from "react";
import { Empty } from "./empty.jsx";
import MainPage from "./Main-page.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import {Cases} from "../Pages/Cases"
import {Services} from "../Pages/Services"
import {Counter} from "../Pages/Counter"
import {Reports} from "../Pages/Reports"


function App(){
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/cases" element={<Cases />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/reports" element={<Reports />} />

                </Routes>
            </Router>

        
        
    )    
};

export default App;