import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <nav id="navbar">
          <a href="#Intro" class="nav-link"> Home </a>
          <a href="#Object" class="nav-link"> About </a>
          <a href="#Inheritance" class="nav-link"> Contact </a>

        </nav>
      </header>
      <h1> Reasons I'm excited to learn React : </h1>
      <ol>
        <li>It's a popular library, so I'll be able to fit in with thw cool kids!</li>
        <li>I'm more likely to get a job as developer if I know React</li>
      </ol>
      <footer>
      © 2021 Ziroll development. All rights reserved.
      </footer>
    </>
  );
}

export default App;
