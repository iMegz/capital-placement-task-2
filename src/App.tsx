import "./App.css";
import OpportunityOverview from "./components/OpportunityOverview/OpportunityOverview";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
    return (
        <div className="app">
            <Sidebar />
            <main className="main">
                <OpportunityOverview />
            </main>
        </div>
    );
}

export default App;
