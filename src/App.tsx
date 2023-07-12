// `http://www.omdbapi.com/?t=q&apikey=9fc0fef8`
// jero96@mail.ru https://63dbfd55c45e08a04352c66d.mockapi.io/users

import "./scss/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <div className="wrapper-app">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* skip */}
            <Route path="/favorites" element={<div>favorites</div>} />
            <Route path="/forum" element={<div>forum</div>} />
            <Route path="/profile" element={<div>profile</div>} />
            <Route path="*" element={<div>no such page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
