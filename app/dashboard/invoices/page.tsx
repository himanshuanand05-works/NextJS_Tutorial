export default async function Page() {
  console.log('Some delay...');
  const data:any = await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log(data)
  return <p>Invoices Dashboard Page: {data}</p>;
}