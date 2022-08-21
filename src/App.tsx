import ResetStyle from './styles/reset';

import Page from './components/Page'
import Header from './components/Header';
import HeaderDecoration from './components/HeaderDecoration';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <>
      <ResetStyle />
      <Page>
        <Header />
        <HeaderDecoration />
        <SignIn />
        <Footer />
      </Page>
    </>
  );
}

export default App;
