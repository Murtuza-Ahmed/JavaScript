import Item from "../item/Item";
function List({ data }: { data: string[] }) {
  const items = data.map((item) => <Item key={item} data={item} />);
  // console.log(items);
  return (
    <div>
      {/* {data} */}
      {items}
    </div>
  );
}
export default List;
