import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Companies from "./components/Monopolies/Companies/Companies";
import Credits from "./components/Credits/Credits";
import Monopolies from "./components/Monopolies/Monopolies";

import companies from "./data/companies.json";

const App = () => {
    return (
        <Router>
            {/* TODO: fix h-screen */}
            <div className="h-screen w-screen font-body">
                <NavBar />
                {/* TODO: que utilidad tiene el relative  */}
                <main className="relative">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/monopolies"
                            element={<Monopolies companies={companies} />}
                        />
                        {companies.map((company) => (
                            <Route
                                key={company.id}
                                path={`/monopolies/${company.aka}`}
                                element={
                                    <Companies
                                        company={company}
                                        id={company.id}
                                    />
                                }
                            />
                        ))}
                        <Route path="/credits" element={<Credits />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;

/* problems */
/*

1. la dimension total 
2. se escaparon los elipses
3. el fondo se corta

*/
