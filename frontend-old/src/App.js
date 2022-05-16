import './App.css';
import Column from './components/Column';
import SlideBar from './components/SlideBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className='columns'>
      <SlideBar/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      <Footer/>
    </div>
  );
}

export default App;
