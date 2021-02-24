import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App flex-col flex m-8 justify-center align-middle w-screen h-screen">
      <input placeholder="Your name" type="text" className="text-white border-gray-50 border-4 py-10 px-6 text-grey-darkest text-center text-5xl rounded-md bg-gray-800 border-dashed " />
      <div className="m-8 max-w-md text-white border-gray-50 border-4 py-10 px-6 text-grey-darkest text-center text-5xl rounded-md bg-gray-800" >
        Java
      </div>
    </div>
  );
}

export default App;
