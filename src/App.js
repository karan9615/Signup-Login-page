import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container sm:mt-20 xl:mt-40 xl:flex sm:flex-col  mx-auto items-center justify-center ">
        <div className="left xl:w-1/2 sm:w-96 sm:mx-auto">
          <img
            className="xl:w-60 sm:w-52 sm:mx-auto"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="Facebook_logo"
          />
          <p className="xl:text-3xl mx-5 xl:text-left sm:text-center">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="right sm:mt-14 sm:mx-auto flex flex-col  bg-white py-2 px-4 rounded-lg shadow-2xl w-1/2 sm:w-1/2 border border-gray-100">
          <input
            className="px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg text-lg outline-blue-300"
            type="email"
            placeholder="Email address or phone number"
          />
          <input
            className="px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg text-lg outline-blue-300"
            type="password"
            placeholder="Password"
          />
          <button className="text-lg btn bg-blue-600 rounded-md text-white py-2 my-2 font-bold hover:bg-blue-700">
            Log In
          </button>
          <span className="text-blue-600 text-sm my-2 cursor-pointer hover:underline">
            Forgotten password
          </span>
          <hr className="my-2" />
          <button className="text-lg btn bg-green-500 rounded-md text-white py-2 my-2 font-bold px-4 mx-auto w-fit hover:bg-green-600">
            Create New Account
          </button>
          <span className="absolute xl:mt-[370px] xl:ml-[50px] sm:mt-[330px] sm:mx-auto text-sm cursor-pointer"><span className="font-bold hover:underline">Create a page </span>for a celebrity, brand or a bussiness</span>
        </div>
      </div>
      
    </div>
  );
}

export default App;
