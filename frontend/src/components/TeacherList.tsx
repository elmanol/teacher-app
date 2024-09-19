import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for a teacher object
interface Teacher {
  id: number;
  name: string;
  subject: string;
}

const TeacherList: React.FC = () => {
  // State to store the list of teachers
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  // State to handle loading and error states
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch teachers data
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('/api/teachers');
        setTeachers(response.data);
      } catch (err) {
        setError('Failed to fetch teachers');
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <strong>{teacher.name}</strong> - {teacher.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;