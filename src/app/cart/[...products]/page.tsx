import React from 'react';

interface ProductsPageProps {
  params: { products: string[] }
}

const Page = ({ params }:ProductsPageProps) => {
  console.log(params);
  
  return (
    <div>
      <h1 className='font-bold text-[20px]'>ProductsPage</h1>
      <ul>
        { params.products.map((route, index) => (
          <li key={ index }>{ route }</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
