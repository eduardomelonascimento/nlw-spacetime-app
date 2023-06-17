import EmptyMemories from '@/components/EmptyMemories'
import Memory from '@/components/Memory'
import { cookies } from 'next/headers'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')
  if (!isAuthenticated) return <EmptyMemories />

  const { data } = await api.get<Memory[]>('/memories', {
    headers: {
      Authorization: `Bearer ${cookies().get('token')?.value!}`,
    },
  })

  if (data.length)
    return (
      <div className="flex flex-col gap-10 p-8">
        {data.map(({ id, excerpt, createdAt, coverUrl }) => (
          <Memory
            id={id}
            coverUrl={coverUrl}
            createdAt={createdAt}
            excerpt={excerpt}
            key={id}
          />
        ))}
      </div>
    )
  return <EmptyMemories />
}
