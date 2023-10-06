import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ProductID() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }
console.log(data);
  return (
    <>
    <h1>
      {data.name}
    </h1>
    <p>{data.description}</p>
    <p>{data.price} $</p>
</>
  );
}

