import './assets/styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Common/Header/Header.jsx';
import Main from './containers/Home/Main.jsx';
import Footer from './components/Common/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
