const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.personHandler}>
        <div>
          name:{" "}
          <input onChange={props.nameChangeHandler} value={props.newName} />
        </div>
        <div>
          number:
          <input
            onChange={props.phoneChangeHandler}
            value={props.newPhoneNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
