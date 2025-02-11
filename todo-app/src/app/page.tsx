import HellowWorld from "@/Api/HellowWorld";

export default async function Home() {
  const data = await HellowWorld();
  console.log(data);
  return <div>{data.message}</div>;
}
