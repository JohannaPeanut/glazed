
import MailchimpFormContainer from './components/MailchimpFormContainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';
import Sec4 from './components/Sec4';
import Sec5 from './components/Sec5';
import Sec6 from './components/Sec6';
import Scrollbar from './components/Scrollbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="desktop">
        <MailchimpFormContainer />
      </div>
      <Scrollbar />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Footer />
    </div>
  );
}

export default App;
