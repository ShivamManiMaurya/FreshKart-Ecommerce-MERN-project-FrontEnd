import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <Toaster />
            <div className="App">
                <Header />
                <main className=" pt-[70px] h-screen">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default App;
