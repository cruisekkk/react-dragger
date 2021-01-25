import {Button} from 'antd';

const dragstart_handler = (e) => {
  // Add the target element's id to the data transfer object
  console.log("dragstart");
  console.log(e.dataTransfer);

  e.dataTransfer.setData("text", e.target.id);
  console.log(e.dataTransfer);
  e.dataTransfer.effectAllowed = "move";
 }

const ComponentButton = ({id, children}) => {
  return <Button id={id} style={{margin: 10}} draggable="true" onDragStart={dragstart_handler}>{children}</Button>
}

export default ComponentButton;