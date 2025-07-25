import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { MovieContext, ThemeContext } from "./context";

function App() {
    const [cartData, setCartData] = useState([]);
    const [darkMode, setDarkMode] = useState(true);
    return (
        <>
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <MovieContext.Provider value={{ cartData, setCartData }}>
                    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
                        <Header />
                        <main>
                            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                                <Sidebar />
                                <MovieList />
                            </div>
                        </main>
                        <Footer />
                    </div>
                </MovieContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
