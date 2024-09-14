import { useEffect, useState } from 'react';
import api from '../utils/api.js';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const { data } = await api.get('/classes');
      setClasses(data);
    };
    fetchClasses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div key={classItem._id} className="card shadow-md p-4 bg-white">
            <h2 className="text-2xl font-bold">{classItem.name}</h2>
            <p className="text-gray-600">{classItem.description}</p>
            <a href={`/class/${classItem._id}`} className="btn btn-primary mt-4">View Class</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassList;
