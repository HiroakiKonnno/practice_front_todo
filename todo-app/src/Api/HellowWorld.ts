const HellowWorld = async () => {
  const res = await fetch("http://localhost:3000/api/helloworld");
  const data = await res.json();
  // console.log(data);
  return data;
};
export default HellowWorld;
