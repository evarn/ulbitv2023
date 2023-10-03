import React from 'react'
import App from 'app/App'
import { ThemeProvide } from 'app/providers/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

render(
    <BrowserRouter>
      <ErrorBoundary>
            <ThemeProvide >
                <App />
            </ThemeProvide>
        </ErrorBoundary>
    </BrowserRouter>,

    document.getElementById('root')
)
