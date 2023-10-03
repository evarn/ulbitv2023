import App from 'app/App'
import { ThemeProvide } from 'app/providers/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvide >
            <App />
        </ThemeProvide>
    </BrowserRouter>,


    document.getElementById('root')
)
