import React from 'react';
import './App.css';
import HomePage from './pages/homePage';
import Footer from './components/footer.jsx';


function App() {
   return (
      <div className="flex flex-col min-h-screen">
         <HomePage />
         <Footer />
      </div>
   );
}

export default App;
