
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';


function App() {
  const [progress, setProgress] = useState(0)


  return (
    <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<NewsComp setProgress={setProgress} category="general" key="general" />}></Route>
        <Route exact path="/business" element={<NewsComp setProgress={setProgress} category="business" key="business" />}></Route>
        <Route exact path="/entertainment" element={<NewsComp setProgress={setProgress} category="entertainment" key="entertainment" />}></Route>
        <Route exact path="/health" element={<NewsComp setProgress={setProgress} category="health" key="health" />}></Route>
        <Route exact path="/science" element={<NewsComp setProgress={setProgress} category="science" key="science" />}></Route>
        <Route exact path="/sports" element={<NewsComp setProgress={setProgress} category="sports" key="sports" />}></Route>
        <Route exact path="/technology" element={<NewsComp setProgress={setProgress} category="technology" key="technology" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
