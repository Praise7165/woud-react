import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="py-6 h-18 bg-white border-b border-b-[#f2f2f2] overflow-hidden transition-[height] duration-300 ease-in-out fixed z-2000 w-full md:pt-5 md:pb-4 md:h-auto md:overflow-visible">
        <Navbar />
      </header>

      <main>
        <h1 className="text-red-500">God is the greatest</h1>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
