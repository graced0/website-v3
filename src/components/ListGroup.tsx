function ListGroup() {
  const pages = ["cs projects", "visual media", "resume"];

  return (
    <>
      <h1>grace do</h1>
      <ul className="list-group">
        {pages.map((pages) => (
          <li>{pages}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
