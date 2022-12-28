// import logo from './logo.svg';
import './App.css';

const API_URL = 'production URL'
// const API_URL = 'development URL'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is just a header
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
      <DoubleTag/>
    </div>
  );
}

function DoubleTag() {
  return (
    <>
      <div className="divTag">First sibling tag</div>
      <div className="divTag">Second sibling tag</div>
      <div className="divTag">{API_URL}</div>
      <div className="divTag">{process.env.NODE_ENV}</div>
    </>
  )
}

export default App;
