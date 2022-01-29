
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./Global.styled";
import Home from './pages/Home';
import Properties from "./pages/Properties";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      {/* Add NavBar component her  */}
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
