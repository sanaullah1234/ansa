import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import './App.css';
import Navbar from './components/navbar/Navbar';
import RecipeItems from './components/recipe/RecipeItems';
import Footer from './components/footer/Footer';
import RecipeDetail from './components/recipe/RecipeDetails'; // New component for recipe details

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* Define the routes here */}
        <Routes>
          <Route
            path="/" // Default route (Homepage)
            element={
              <>
                <RecipeItems />
              </>
            }
          />
          
          {/* Define a dynamic route for recipe details */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
