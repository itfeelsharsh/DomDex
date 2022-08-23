import { useRouter } from 'next/router'

const Slug = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Slug: {pid}</p>
}

export default Slug