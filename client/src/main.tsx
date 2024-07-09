import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRoutes.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
