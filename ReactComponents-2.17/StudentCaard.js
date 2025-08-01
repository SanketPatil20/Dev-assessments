function StudentCard({ name, course }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p>Course: {course}</p>
    </div>
  );
}

export default StudentCard;
