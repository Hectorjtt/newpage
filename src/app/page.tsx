import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-center mt-24">
        <h1 className="text-5xl font-bold">Welcome to Home</h1>
        <p className="text-lg text-gray-600 mt-2">This is a short description about the page.</p>
        <button className="mt-6 px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Click Me
        </button>
      </main>
    </>
  );
}
