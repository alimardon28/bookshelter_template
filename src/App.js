import './App.css';
import Header from './Components/Header/Header';
import BookElements from './Pages/BookElements/BookElements';
import Bookmark from './Pages/Bookmark/Bookmark';

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
