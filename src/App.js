import './App.css';
import Header from './Components/Header/Header';
import Bookmark from './Pages/Bookmark/Bookmark';
import BookElements from './Pages/BookElements/BookElements'

function App() {
  return (
    <>
         <Header/>
         <div className='elements'>
            <Bookmark/>
             <BookElements/>
         </div>
    </>
  );
}

export default App;
