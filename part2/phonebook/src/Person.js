const Person = (props) => {
  const { name, number } = props;

  return (
    <div>
      {name} {number}
    </div>
  );
}

export default Person