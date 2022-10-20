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
import './styles/main.scss';
import Dougnut1 from './components/Dougnut1';
import Dougnut2 from './components/Dougnut2';
import Dougnut3 from './components/Dougnut3';
import Dougnut4 from './components/Dougnut4';
import Dougnut5 from './components/Dougnut5';
import Dougnut6 from './components/Dougnut6';

function App() {
  return (
    <div className="App ss-container sticky-container">
      <Navbar />

      <div className="desktop sticky">
        <MailchimpFormContainer />
      </div>

      {/* <Scrollbar /> */}
      <Dougnut1 />
      <Sec1 />
      <Dougnut2 />
      <Sec2 />
      <Dougnut3 />
      <Sec3 />
      <Dougnut4 />
      <Sec4 />
      <Dougnut5 />
      <Sec5 />
      <Dougnut6 />
      <Sec6 />
      <Footer />
    </div>
  );
}

export default App;
