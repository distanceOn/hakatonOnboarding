import { faker } from '@faker-js/faker/locale/ru'

import { Material } from '@/entities/Material'

export const MaterialsFull = () => {
  const generateRandomDesc = () => {
    return faker.lorem.paragraphs(5)
  }

  const items = [
    {
      id: 1,
      title: 'Welcome to the Company',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 2,
      title: 'Design',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 3,
      title: 'Сlient Service',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 4,
      title: 'Engineering',
      label: 'Локальные курсы',
      desc: generateRandomDesc(),
    },
    {
      id: 5,
      title: 'Design Patterns',
      label: 'Локальные курсы',
      desc: generateRandomDesc(),
    },
    {
      id: 6,
      title: 'Project Management',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 7,
      title: 'Quality Assurance',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 8,
      title: 'Software Development',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 9,
      title: 'Data Science',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 10,
      title: 'Machine Learning',
      label: 'Локальные курсы',
      desc: generateRandomDesc(),
    },
    {
      id: 11,
      title: 'Frontend Development',
      label: 'Локальные курсы',
      desc: generateRandomDesc(),
    },
    {
      id: 12,
      title: 'Backend Development',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 13,
      title: 'Mobile App Development',
      label: 'Тесты',
      desc: generateRandomDesc(),
    },
    {
      id: 14,
      title: 'Cloud Computing',
      label: 'Тесты',
      desc: generateRandomDesc(),
    },
    {
      id: 15,
      title: 'DevOps',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 16,
      title: 'Cybersecurity',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 17,
      title: 'Database Management',
      label: 'Тесты',
      desc: generateRandomDesc(),
    },
    {
      id: 18,
      title: 'UI/UX Design',
      label: 'Локальные курсы',
      desc: generateRandomDesc(),
    },
    {
      id: 19,
      title: 'Data Analysis',
      label: 'Материалы',
      desc: generateRandomDesc(),
    },
    {
      id: 20,
      title: 'Тесты',
      label: 'Тесты',
      desc: generateRandomDesc(),
    },
  ]
  return (
    <div>
      <div>
        {items.map(item => {
          return <Material key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}
