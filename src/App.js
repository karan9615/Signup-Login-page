import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mt-40 flex mx-auto items-center justify-center">
        <div className="left w-1/2">
          <img
            className="w-60"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="Facebook_logo"
          />
          <p className="text-3xl mx-5 text-left">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="right flex flex-col bg-white py-2 px-4 rounded-lg shadow-2xl w-1/3 border border-gray-100">
          <input
            className="px-4 h-14 my-2 border border-1 border-gray-200 rounded-lg text-lg outline-blue-300"
            type="text"
            placeholder="Email address or phone number"
          />
          <input
            className="px-4 h-14 my-2 border border-1 border-gray-200 rounded-lg text-lg outline-blue-300"
            type="password"
            placeholder="Password"
          />
          <button className="text-lg btn bg-blue-600 rounded-md text-white py-3 my-2 font-bold hover:bg-blue-700">
            Log In
          </button>
          <span className="text-blue-600 text-sm my-2 cursor-pointer hover:underline">
            Forgotten password
          </span>
          <hr className="my-2" />
          <button className="text-lg btn bg-green-500 rounded-md text-white py-3 my-2 font-bold px-4 mx-auto w-fit hover:bg-green-600">
            Create New Account
          </button>
          <span className="absolute mt-[370px] ml-[50px] text-sm cursor-pointer"><span className="font-bold hover:underline">Create a page </span>for a celebrity, brand or a bussiness</span>
        </div>
      </div>
      
    </div>
  );
}

export default App;
