function ChildComponent(props) {
  const { name, age } = props;

  //   props의 데이터는 key value 의 형태이다.
  return (
    <div>
      <p>
        이름은 {name}이며 {age}살입니다.
      </p>
    </div>
  );
}

export default ChildComponent;
