import { Button, Checkbox, Divider, Input, InputRef, List, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/todo";
import { RootState } from "../store/index";

export default function Todo() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => {
    return state;
  });
  const inputRef = useRef<InputRef>(null);
  // const [data, setData] = useState<string[]>([]);
  const addToHandler = () => {
    return dispatch(addTodo(inputRef.current!.input!.value));
    // setData([...data, inputRef.current!.input!.value]);
  };
  const todoOnChangeHandler = () => {};
  return (
    <div>
      <Title>My ToDo App</Title>
      <Divider />
      <Space.Compact>
        <Input ref={inputRef} />
        <Button type="primary" onClick={addToHandler}>
          Add Todo
        </Button>
      </Space.Compact>
      <Divider />
      <List
        size="small"
        header={<div>Todo CheckList</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Checkbox onChange={todoOnChangeHandler}>{item.text}</Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
}
