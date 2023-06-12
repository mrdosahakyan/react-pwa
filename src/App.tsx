import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import ThemeWrapper from './theme/ThemeWrapper';
import { store } from './redux/store';
import RoutesPage from './routes';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeWrapper>
            <RoutesPage />
          </ThemeWrapper>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
