"use client";
import HellowWorld from "@/Api/HellowWorld";
import useSWR from "swr";

export default function Home() {
  // const data = await HellowWorld();
  // console.log(data);

  const { data, error, isLoading } = useSWR("http://localhost:3000/api/helloworld", HellowWorld);
  if (error) {
    return <div>Failed to load</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{data}</div>;
}
