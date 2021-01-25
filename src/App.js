// import logo from './logo.svg';
import './App.css';
import { Row, Col, Divider } from 'antd';
import ToolKit from './Main/Toolkit'

function App() {
  return (
    <div className="App">
      <Divider orientation="left">ToolKit</Divider>
      <ToolKit style={{height: 200, marginDown: 100}}/>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div >col-6</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div >col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div >col-6</div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
