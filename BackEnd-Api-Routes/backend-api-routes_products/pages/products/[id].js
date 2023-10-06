import { useRouter } from 'next/router';

export default function ProductID() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      {id}
    </div>
  );
}

