const Person = (props) => {
  const { name, phone } = props;

  return (
    <div>
      {name} {phone}
    </div>
  );
}

export default Person