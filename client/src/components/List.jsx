import ListItem from "./ListItem";

function List(props) {
  const arrayList = props.list;
  console.log(arrayList);
  return (
    <>
      <div className="list-container">
        {arrayList.map((item) => (
          <ListItem
            setList={props.setList}
            list={props.list}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </>
  );
}
export default List;
