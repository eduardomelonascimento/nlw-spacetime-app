import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface MemoryProps {
  id: string
  createdAt: string
  coverUrl: string
  excerpt: string
}
export default function Memory({
  id,
  createdAt,
  excerpt,
  coverUrl,
}: MemoryProps) {
  return (
    <div className="space-y-4">
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {dayjs(createdAt).format('D[ de ]MMMM[, ] YYYY')}
      </time>
      <Image
        src={coverUrl}
        alt={excerpt}
        width={592}
        height={280}
        className="aspect-video w-full object-cover"
      />
      <p className="break-words text-lg leading-relaxed">{excerpt}</p>
      <Link
        href={`memories/${id}`}
        className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
      >
        Ler mais
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
