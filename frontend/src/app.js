import BugForm from "./components/BugForm";
import BugList from "./components/BugList";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div style={{ padding: 20 }}>
        <h1>Bug Tracker</h1>
        <BugForm />
        <BugList />
      </div>
    </ErrorBoundary>
  );
}

export default App;
