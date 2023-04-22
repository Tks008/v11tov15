import logo from './logo.svg';
import './App.css';
import State from './State';
import ClassState from './ClassState'
import PropsExampl from './PropsExampl'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Learn React 
        </a>
       {
       //<State></State>//
      
      }
      {
       //<ClassState></ClassState>
      }
      <PropsExampl name="Tushar" email="tks@gmail.com" address={{city:"KOlkata",pin:712413}}></PropsExampl>
      <PropsExampl name="Payel" email="payel@gmail.com" address={{city:"KOlkata2",pin:7124135}}></PropsExampl>
      <PropsExampl name="Evan" email="Evan@gmail.com" address={{city:"KOlkata3",pin:71241366}}></PropsExampl>
      </header>

    </div>
  );
}

export default App;
