import { Navigate, Outlet } from 'react-router-dom'

interface IProtectedRouteProps {
  redirectPath: string
}
export const ProtectedRoute = ({ redirectPath }: IProtectedRouteProps) => {
  const isAuthenticated = true //через useSelector из state
  if (!isAuthenticated) return <Navigate to={redirectPath} replace={true} />
  return <Outlet />
}
