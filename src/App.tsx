import ResetStyle from './styles/Reset';

import Header from './components/Header';
import HeaderDecoration from './components/HeaderDecoration';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <>
      <ResetStyle />
      <Header />
      <HeaderDecoration />
      <SignIn />
      <Footer />
    </>
  );
}

export default App;
