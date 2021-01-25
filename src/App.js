// import logo from './logo.svg';
import './App.css';
import { Row, Col, Divider } from 'antd';
import ToolKit from './Main/Toolkit'
import ComponentList from './Main/ComponentList'

const dragover_handler = (ev) => {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move"
 }
const drop_handler = (ev) => {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  // debugger;
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
 }

function App() {
  return (
    <div classname="App">
      <Divider orientation="left">ToolKit</Divider>
      <ToolKit style={{height: 100, marginDown: 20, background: '#eeeeee', color: 'black'}}/>
      <Row>
        <Col className="gutter-row" span={5} style={{height: 700, marginTop: 10, background: '#eeefff', color: 'black'}}>
        <Divider orientation="left">Components</Divider>
          <ComponentList />
        </Col>
        <Col 
          className="gutter-row" 
          span={13} 
          style={{height: 600, margin: 30, background: 'rgb(250,250,250)', color: 'black'}}
          onDrop={drop_handler} onDragOver={dragover_handler}
          >
        <Divider orientation="left">Canvas</Divider>
        {/* <div ondrop="drop_handler(event)" ondragover="dragover_handler(event)">draggleble</div> */}
          {/* <div >col-6</div> */}
        </Col>
        <Col className="gutter-row" span={5} span={5} style={{height: 700, marginTop: 10, background: '#eeefff', color: 'black'}}>
          <Divider orientation="left">Attributes</Divider>
        </Col>
      </Row>
    </div>
  );
}

export default App;
