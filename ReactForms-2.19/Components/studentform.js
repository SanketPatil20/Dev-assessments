import { useState } from 'react';

function StudentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !course) {
      setError('All fields are required');
      return;
    }

    setError('');
    console.log('Student Info:', { name, email, course });

    setName('');
    setEmail('');
    setCourse('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Course: </label>
          <input value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
