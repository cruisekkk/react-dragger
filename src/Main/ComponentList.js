import List from '../Components'

const ComponentList = ({style}) => {
  return (
    <div id="rc">
      {List.map(item => item)}
    </div>
  )
}

export default ComponentList;