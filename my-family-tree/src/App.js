import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import FamilyTreeComponent from './components/FamilyTreeComponent';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './output.css';

function App() {
  const style = `
  .family-link {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    padding: 10px;
    /* Add more styling as needed */
  }`;
  return (
    <Router>
      <div>
        <style>{style}</style>
        {/* Navigation Links */}
        
        <ul class="flex">
          <li class="mr-3">
            <a class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="#">Active Pill</a>
          </li>
          <li class="mr-3">
            <a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="#">Pill</a>
          </li>
          <li class="mr-3">
            <a class="inline-block py-1 px-3 text-gray-400 cursor-not-allowed" href="#">Disabled Pill</a>
          </li>
        </ul>
        <Link to="/edelmira-whitman" className="family-link">Edelmira Whitman</Link>
        <Link to="/nidia-whitman" className="family-link">Nidia Whitman</Link>
        <Link to="/veronica-whitman" className="family-link">Veronica Whitman</Link>
        <Link to="/ingrid-whitman" className="family-link">Ingrid Whitman</Link>
        <Link to="/sonia-whitman" className="family-link">Sonia Whitman</Link>
        <Link to="/marlen-whitman" className="family-link">Marlen Whitman</Link>

        {/* Routes */}
        <Routes>
          <Route path="/edelmira-whitman" element={<FamilyTreeComponent familyBranch="edelmiraWhitman" />} />
          <Route path="/nidia-whitman" element={<FamilyTreeComponent familyBranch="nidiaWhitman" />} />
          <Route path="/veronica-whitman" element={<FamilyTreeComponent familyBranch="veronicaWhitman" />} />
          <Route path="/ingrid-whitman" element={<FamilyTreeComponent familyBranch="ingridWhitman" />} />
          <Route path="/sonia-whitman" element={<FamilyTreeComponent familyBranch="soniaWhitman" />} />
          <Route path="/marlen-whitman" element={<FamilyTreeComponent familyBranch="marlenWhitman" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
