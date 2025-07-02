
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { StrictMode } from 'react';
export function App() {
  return (
  <StrictMode>
  <Navbar Title= "TextUtils" about="About"/>
  <Textform heading="Enter the text to analyze belows "/>
  </StrictMode>

  );
}
export default App;


