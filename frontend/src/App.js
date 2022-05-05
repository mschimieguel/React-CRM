import './App.css';
import Column from './components/Column';
import SlideBar from './components/SlideBar';

function App() {
  return (
    <div className='columns'>
      <SlideBar/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
    </div>
  );
}

export default App;
