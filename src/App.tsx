import { Routes, Route } from "@solidjs/router";

// Pages
import Khasiat from "./pages/Khasiat";
import Ketam from "./pages/Ketam";
import Ikan from "./pages/Ikan";
import Udang from "./pages/Udang";

// Components
import Navigation from "./Components/Navigation";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" component={Khasiat} />
                <Route path="/ketam" component={Ketam} />
                <Route path="/ikan" component={Ikan} />
                <Route path="/udang" component={Udang} />
            </Routes>

            <Navigation />
        </>
    );
}
