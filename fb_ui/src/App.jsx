import './App.css';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <div className="App-header">FestBuddy</div>
      <div class="first-column">
        <div class="upcoming-events-container">
          <UpcomingEvents></UpcomingEvents>
        </div>
      </div>
    </div>
  );
}

export default App;
