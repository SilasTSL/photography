import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { TermsAndConditions } from "./pages/terms_and_conditions/TermsAndConditions";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
