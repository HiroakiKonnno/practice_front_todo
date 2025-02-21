"use client";

import { useEffect, useState } from "react";

type Data = {
  message: string;
};

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchHelloWorld = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/helloworld");

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };
    fetchHelloWorld();
  }, []);

  return <div>{data ? data.message : <div>データがありません</div>}</div>;
}
