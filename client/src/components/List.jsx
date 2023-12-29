import ListItem from "./ListItem";

function List(props) {
  const arrayList = props.list;
  // console.log(arrayList);
  if (arrayList.length === 0) {
    return (
      <>
        <div className="list-container">
          <div className="noData">
            <div>Add Item </div>
            <span>+</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="list-container">
        {arrayList.map((item) => (
          <ListItem
            itemIdToEdit={props.itemIdToEdit}
            setItemIdToEdit={props.setItemIdToEdit}
            setIsEditing={props.setIsEditing}
            isEditing={props.isEditing}
            setInputVal={props.setInputVal}
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
