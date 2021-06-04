import { AppContext } from '../Contexts/AppContexts';
import { useContext } from 'react';
// import { useAppContext } from '../Contexts/AppContexts';
type Student = {
    id: number;
    name: string;
};

const StudentBoard = () => {
    const { studentList, setStudentList, deleteStudent, removeStudent } = useContext(AppContext);

    return (
        <>
            {studentList.map(({ id, name }: Student) => {
                return (
                    <div>
                        <div>ID: {id}</div>
                        <div>name: {name}</div>
                        <button
                            onClick={() => {
                                removeStudent(id);
                            }}
                        >
                            REMOVE
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default StudentBoard;
