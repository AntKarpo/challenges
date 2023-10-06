import useSWR from "swr";
 
const fetcher = url => fetch(url).then(r => r.json())

export default function ProductsPage() {
    const { data, error } = useSWR('/api/products', fetcher);
  
    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;
  
    const productList = data.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    ));
  
    return (
      <div>
        {productList}
      </div>
    );
  }
  
  