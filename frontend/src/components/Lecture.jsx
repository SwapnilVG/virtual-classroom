import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api.js';
import CommentSection from './CommentSection.js';

const Lecture = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await api.get(`/sessions/${sessionId}`);
      setSession(data);
    };
    fetchSession();
  }, [sessionId]);

  return (
    <div className="p-6">
      {session && (
        <>
          <h1 className="text-3xl font-bold mb-4">{session.title}</h1>
          {session.lectures.map((lecture) => (
            <div key={lecture._id} className="mb-4">
              <h2 className="text-xl font-bold">{lecture.title}</h2>
              <p className="text-gray-600">{lecture.content}</p>
            </div>
          ))}
          <CommentSection sessionId={sessionId} />
        </>
      )}
    </div>
  );
};

export default Lecture;
