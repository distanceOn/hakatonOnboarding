import { useAppSelector } from '@/shared/model/hooks'

import { MainLayout } from '@/pages/layouts/MainLayout'
import { Materials } from '@/widgets/Materials'
import { Progress } from '@/widgets/Progress'

export const MainPage = () => {
  const { auth } = useAppSelector(state => state.user)
  return (
    <MainLayout>
      <div className='flex gap-10'>
        {auth ? <Materials /> : ''}
        {auth ? <Progress /> : ''}
      </div>
    </MainLayout>
  )
}
