import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvide } from 'app/providers/ThemeProvider';
import App from './app/App';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvide>
                <App />
            </ThemeProvide>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
