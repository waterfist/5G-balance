import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './page/Auth';
import { Detail } from './page/Detail';
import { NotFound } from './page/NotFound';
import { Home } from './page/Home';
import { Signin } from './page/Signin';
import { Signup } from './page/Signup';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/balance/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
