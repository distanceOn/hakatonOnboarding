import { Route, Routes } from 'react-router-dom'

import { ProtectedRoute } from './ProtectedRoute'

import { MainPage } from '@/pages/MainPage'

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />

    <Route element={<ProtectedRoute redirectPath='/login' />}>
      {/* <Route path='/profile' element={<ProfilePage />} /> */}
    </Route>
  </Routes>
)
