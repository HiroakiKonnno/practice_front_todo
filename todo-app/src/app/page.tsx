"use client";

import { useEffect, useState } from "react";

type Data = {
  message: string;
};

export default function Home() {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const HellowWorld = async () => {
      const res = await fetch("http://localhost:3000/api/helloworld");
      const data = await res.json();
      setData(data);
    };
    HellowWorld();
  }, []);

  return <div>{data ? data.message : false}</div>;
}
