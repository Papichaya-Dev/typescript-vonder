import { AppContext } from '../Contexts/AppContexts';
import { useContext, useState } from 'react';

const StudentInput = () => {
    const { studentList, setStudentList, addStudent, resetStudent } = useContext(AppContext);
    const [id, setId] = useState<number | string>('');
    const [name, setName] = useState<string>('');

    return (
        <div>
            <div>
                <span>ID : </span>
                <input
                    onChange={({ target: { value } }) => {
                        setId(value);
                    }}
                />
            </div>
            <div>
                <input
                    onChange={({ target: { value } }) => {
                        setName(value);
                    }}
                />
            </div>
            <button
                onClick={() => {
                    addStudent({ id, name });
                }}
            >
                ADD
            </button>
            <button
                onClick={() => {
                    resetStudent({ id, name });
                }}
            >
                RESET
            </button>
        </div>
    );
};

export default StudentInput;
