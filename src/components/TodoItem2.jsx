function TodoItem2() {

  let todoName = 'Go to Collage';
  let todoDate = '6/10/2024';

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;