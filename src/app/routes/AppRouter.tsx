import { Route, Routes } from 'react-router-dom'

import { ProtectedRoute } from './ProtectedRoute'

import { AuthPage } from '@/pages/AuthPage'
import { MainPage } from '@/pages/MainPage'
import { MaterialsPage } from '@/pages/MaterialsPage'

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/auth/:type' element={<AuthPage />} />
    <Route path='/materials' element={<MaterialsPage />} />

    <Route element={<ProtectedRoute redirectPath='/login' />}>
      {/* <Route path='/profile' element={<ProfilePage />} /> */}
    </Route>
  </Routes>
)
