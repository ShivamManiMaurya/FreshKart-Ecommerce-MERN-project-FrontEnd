import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="pt-[300px] bg-pink-400">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
