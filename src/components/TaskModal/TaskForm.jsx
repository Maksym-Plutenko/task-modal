const TaskForm = () => {
  return (
    <form>
      <div role="group">
        <label>
          Title
          <input type="text" />
        </label>
        <div>
          <label>
            Start
            <input type="text" />
          </label>
          <label>
            End
            <input type="text" />
          </label>
        </div>
        <label>
          Low
          <input type="radio" name="priority"/>
        </label>
        <label>
          Medium
          <input type="radio" name="priority"/>
        </label>
        <label>
          High
          <input type="radio" name="priority"/>
        </label>
      </div>
      <button type="button">Edit</button>
    </form>
  );
};

export { TaskForm };
