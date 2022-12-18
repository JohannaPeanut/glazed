import Footer from './components/Footer/Footer';
import MailchimpFormContainer from './components/SubscriptionForm/MailchimpFormContainer';
import Navbar from './components/Navbar/Navbar';
import Sec1 from './components/Section/Sec1';
import Sec2 from './components/Section/Sec2';
import Sec3 from './components/Section/Sec3';
import Sec4 from './components/Section/Sec4';
import Sec5 from './components/Section/Sec5';
import Sec6 from './components/Section/Sec6';
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
      <Sec1 />
      <Doughnut doughnut={doughnuts[1]} />
      <Sec2 />
      <Doughnut doughnut={doughnuts[2]} />
      <Sec3 />
      <Doughnut doughnut={doughnuts[3]} />
      <Sec4 />
      <Doughnut doughnut={doughnuts[4]} />
      <Sec5 />
      <Doughnut doughnut={doughnuts[5]} />
      <Sec6 />
      <Footer />
    </div>
  );
}

export default App;
