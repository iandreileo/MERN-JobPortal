import {AppHeader, JobsArea, JobSearchBar} from './components';
import {JobsProvider} from './components/JobsProvider';

function App() {
  return (
    <JobsProvider>
      <div className="App">
        <AppHeader />
        <JobSearchBar />
        <JobsArea />
      </div>
    </JobsProvider>
  );
}

export default App;
