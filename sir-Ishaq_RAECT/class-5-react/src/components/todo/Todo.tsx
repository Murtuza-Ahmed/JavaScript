import { Button, Checkbox, Divider, Input, InputRef, List, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useRef, useState } from "react";

export default function Todo() {
  const inputRef = useRef<InputRef>(null);
  const [data, setData] = useState<string[]>([]);
  const addToHandler = () => {
    return setData([...data, inputRef.current!.input!.value]);
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
            <Checkbox onChange={todoOnChangeHandler}>{item}</Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
}
