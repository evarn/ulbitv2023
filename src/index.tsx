import App from 'app/App'
import { ThemeProvide } from 'app/providers/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


render(
    <BrowserRouter>
        <ThemeProvide >
            <App />
        </ThemeProvide>
    </BrowserRouter>,


    document.getElementById('root')
)
