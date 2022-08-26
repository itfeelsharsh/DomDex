import { useRouter } from 'next/router'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p> <div> The product is: {slug} </div> </p>
}

export default Slug