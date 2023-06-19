import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Toaster />
            <div className="App">
                <Header />
                <main className=" pt-[70px] h-screen">
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </>
    );
}

export default App;
