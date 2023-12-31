import { addTask } from "../api";
import { editTask } from "../api";
function Add(props) {
  async function handleSubmit() {
    if (props.isEditing) {
      const updatedItem = { id: props.itemIdToEdit, content: props.inputVal };
      await editTask(props.itemIdToEdit, props.inputVal);
      props.setList(
        props.list.map((item) =>
          item.id === props.itemIdToEdit ? updatedItem : item
        )
      );
      props.setIsEditing(!props.isEditing);
    } else {
      const id = Date.now();
      const data = { id, content: props.inputVal };
      await addTask(data);

      props.setList([...props.list, data]);
    }
    props.setInputVal("");
  }

  return (
    <>
      <div className="add">
        <input
          className="inputArea"
          value={props.inputVal}
          onChange={(e) => {
            props.setInputVal(e.target.value);
          }}
          type="text"
        />
        <button className="btn" onClick={handleSubmit}>
          {props.isEditing ? "UPDATE" : "ADD"}
        </button>
      </div>
    </>
  );
}
export default Add;
