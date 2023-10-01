import "./App.css";
import ReportClass from "./components/ReportClass/ReportClass";
import Sidebar from "./components/Sidebar/Sidebar";
import { I_StatCardIProps } from "./components/StatCard/StatCard";
import TotalCandidateFlow from "./components/TotalCandidateFlow/TotalCandidateFlow";

function App() {
    const data: I_StatCardIProps[] = [
        {
            title: "Applied",
            value: 3122,
            prevValue: 1590,
            percentDifference: 15,
        },
        { title: "Offer", value: 183, prevValue: 71, percentDifference: 15 },
        { title: "Hired", value: 98, prevValue: 167, percentDifference: -15 },
    ];

    const flowData = {
        applied: { qualified: 3122, disqualified: 1445 },
        recommended: { qualified: 2164, disqualified: 958 },
        interview: { qualified: 443, disqualified: 1721 },
        offer: { qualified: 183, disqualified: 260 },
        hired: { qualified: 118, disqualified: 65 },
    };

    return (
        <div className="app">
            <Sidebar />
            <main className="main">
                <div style={{ width: "718px" }}>
                    <ReportClass data={data} />
                </div>
                <div style={{ width: "538px" }}>
                    <TotalCandidateFlow
                        total={4567}
                        data={flowData}
                        qualified={78}
                        disqualified={22}
                    />
                </div>
            </main>
        </div>
    );
}

export default App;
