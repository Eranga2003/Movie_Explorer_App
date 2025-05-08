// App.js or App.tsx
import React from 'react';
// Removed duplicate import: import HomePage from './HomePage';
import AppRoutes from './routes/AppRoutes.jsx';

/**
 * The top-level component that renders the routes.
 *
 * @returns {React.ReactElement} The rendered routes.
 */
function App() {
  return (
    <div>
      <AppRoutes/>
    </div>
  );
}

export default App;
 