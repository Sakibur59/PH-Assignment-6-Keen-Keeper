import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router'
import FriendProvider from './FriendContext/FriendProvide'




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <FriendProvider>
      <RouterProvider router={router} />,
    </FriendProvider>
  </StrictMode>,
)
