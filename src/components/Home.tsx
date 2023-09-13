import { Button } from '@nextui-org/react'
import { useCountStore } from '@/store'
import { Link } from 'react-router-dom'
export default function Home() {
  const { count, addCount } = useCountStore()
  return (
    <div className="h-40 w-40">
      <h1 className="text-bold text-3xl">Zustand</h1>
      <Button color="primary" onClick={addCount}>
        点我{count}次
      </Button>
      <Link to="/about">About</Link>
    </div>
  )
}
