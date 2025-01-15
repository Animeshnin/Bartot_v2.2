import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './app/style/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './app/provider/ErrorProvider'
import  "@/shared/config/i18n/i18n.ts";
import { ThemeProvider } from './app/provider/ThemeProvider'
import {StoreProvider} from "@/app/StoreProvider/ui/StoreProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>

    <StoreProvider>
        <StrictMode>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
        </StrictMode>,
    </StoreProvider>
    </BrowserRouter>




)
