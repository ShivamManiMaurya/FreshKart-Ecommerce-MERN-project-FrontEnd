import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <main className=" pt-[70px] bg-zinc-200 h-screen">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
