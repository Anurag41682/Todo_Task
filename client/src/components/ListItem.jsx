import { removeTask } from "../api";
function ListItem(props) {
  async function handleDelete(id) {
    await removeTask(id);

    props.setList(
      props.list.filter((item) => {
        return item.id !== id;
      })
    );
  }
  function handleEdit(id) {
    const itemToEdit = props.list.filter((item) => {
      return item.id === id;
    });
    props.setInputVal(itemToEdit[0].content);
    props.setIsEditing(true);
    props.setItemIdToEdit(id);
  }

  return (
    <>
      <div className="listItem">
        <div className="content">{props.item.content}</div>
        <div className="comboBtn">
          <button
            className="editBtn"
            onClick={() => {
              handleEdit(props.item.id);
            }}
          >
            Edit
          </button>
          <button
            className="deleteBtn"
            onClick={() => {
              handleDelete(props.item.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default ListItem;
