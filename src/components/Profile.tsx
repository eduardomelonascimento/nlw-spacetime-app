import { getUser } from '@/lib/auth'
import Image from 'next/image'

export default function Profile() {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left transition-colors ">
      <Image src={avatarUrl} alt={`Avatar of ${name}`} width={40} height={40} />
      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a href="" className="block w-fit text-red-400 hover:text-red-300">
          Log out
        </a>
      </p>
    </div>
  )
}
