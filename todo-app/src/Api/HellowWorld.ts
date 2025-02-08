const HellowWorld = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  // const data = await res.json();
  // console.log(data);
  return res;
};
export default HellowWorld;
