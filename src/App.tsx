import "./App.css";
import ReportClass from "./components/ReportClass/ReportClass";
import Sidebar from "./components/Sidebar/Sidebar";
import { I_StatCardIProps } from "./components/StatCard/StatCard";

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
    return (
        <div className="app">
            <Sidebar />
            <main className="main">
                <div style={{ width: "718px" }}>
                    <ReportClass data={data} />
                </div>
            </main>
        </div>
    );
}

export default App;
