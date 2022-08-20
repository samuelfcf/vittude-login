import ResetStyle from './styles/Reset';

import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <>
      <ResetStyle />
      <Header />
      <SignIn />
      <Footer />
    </>
  );
}

export default App;
