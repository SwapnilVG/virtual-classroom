import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api.js';

const ClassDetails = () => {
  const { classId } = useParams();
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    const fetchClassData = async () => {
      const { data } = await api.get(`/classes/${classId}`);
      setClassData(data);
    };
    fetchClassData();
  }, [classId]);

  return (
    <div className="p-6">
      {classData && (
        <>
          <h1 className="text-3xl font-bold mb-6">{classData.name}</h1>
          <p className="text-gray-600 mb-4">{classData.description}</p>
          <div>
            <h2 className="text-2xl font-bold mb-4">Units</h2>
            {classData.units.map((unit) => (
              <div key={unit._id} className="mb-4">
                <h3 className="text-xl font-bold">{unit.name}</h3>
                <div>
                  {unit.sessions.map((session) => (
                    <a
                      key={session._id}
                      href={`/session/${session._id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {session.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ClassDetails;
