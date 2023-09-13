import { fetcher } from '@/api'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
export default function About() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts/1', fetcher)
  if (error) return 'An error has occurred.'
  if (isLoading) return 'Loading...'
  return (
    <div>
      <h1>{data.title}</h1>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </div>
  )
}
