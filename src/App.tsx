import { RouterProvider } from 'react-router/dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './App.css'
import './normalize.css';

import { router } from './router';

const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App;
