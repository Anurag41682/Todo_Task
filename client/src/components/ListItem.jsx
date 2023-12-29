function ListItem(props) {
  function handleDelete(id) {
    props.setList(
      props.list.filter((item) => {
        return item.id !== id;
      })
    );
  }
  function handleEdit() {}
  return (
    <>
      <div className="listItem">
        <div className="content">{props.item.content}</div>
        <div className="comboBtn">
          <button className="editBtn" onClick={handleEdit}>
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
