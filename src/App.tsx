import "./App.css";
import DetailedOpportunityOverview from "./components/DetailedOpportunityOverview/DetailedOpportunityOverview";
import OpportunityOverview from "./components/OpportunityOverview/OpportunityOverview";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
    return (
        <div className="app">
            <Sidebar />
            <main className="main">
                <OpportunityOverview />
                <DetailedOpportunityOverview />
            </main>
        </div>
    );
}

export default App;
