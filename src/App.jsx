import Dougnut1 from './components/Dougnut1';
import Dougnut2 from './components/Dougnut2';
import Dougnut3 from './components/Dougnut3';
import Dougnut4 from './components/Dougnut4';
import Dougnut5 from './components/Dougnut5';
import Dougnut6 from './components/Dougnut6';
import Footer from './components/Footer';
import MailchimpFormContainer from './components/MailchimpFormContainer';
import Navbar from './components/Navbar';
import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';
import Sec4 from './components/Sec4';
import Sec5 from './components/Sec5';
import Sec6 from './components/Sec6';
import './styles/main.scss';
import { doughnuts } from './components/Doughnut/doughnuts'
import Doughnut from './components/Doughnut/Doughnut';

function App() {
  return (
    <div className="App smooth-scroll-container sticky-container">
      <Navbar />

      <div className="desktop sticky">
        <MailchimpFormContainer />
      </div>
      <Doughnut doughnut={doughnuts[0]} />
      {/* <Dougnut1 /> */}
      <Sec1 />
      <Doughnut doughnut={doughnuts[1]} />
      {/* <Dougnut2 /> */}
      <Sec2 />
      <Doughnut doughnut={doughnuts[2]} />
      {/* <Dougnut3 /> */}
      <Sec3 />
      <Doughnut doughnut={doughnuts[3]} />
      {/* <Dougnut4 /> */}
      <Sec4 />
      <Doughnut doughnut={doughnuts[4]} />
      {/* <Dougnut5 /> */}
      <Sec5 />
      <Doughnut doughnut={doughnuts[5]} />
      {/* <Dougnut6 /> */}
      <Sec6 />
      <Footer />
    </div>
  );
}

export default App;
