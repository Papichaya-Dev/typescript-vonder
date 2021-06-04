import StudentBoard from 'pages/useContext/StudentBoard';
import { createContext, useState, useCallback, useEffect, useContext } from 'react';

interface IcontextProps {
    children: any;
}
type Student = {
    id: number;
    name: string;
};
type StudentList = Array<Student> | [];

const AppContext = createContext<any>(null);

const AppProvider = ({ children }: IcontextProps) => {
    const [studentList, setStudentList] = useState<StudentList>([]);

    const addStudent = useCallback(
        ({ id, name }: Student) => {
            console.log(studentList);
            setStudentList((prev) => {
                const newData = [...prev];
                newData.push({ id, name });
                return newData;
            });
        },
        [studentList],
    );

    const deleteStudent = useCallback(({ id, name }: Student) => {
        setStudentList((prev) => {
            const deleteData = [...prev];
            deleteData.splice(id, 1);
            return deleteData;
        });
    }, []);

    const removeStudent = useCallback(
        (id) => {
            // console.log(studentList);
            // setStudentList((prev) => {
            //     const newData = prev.filter((Student) => Student.id !== id);
            //     console.log(newData);

            //     return newData;
            // });
            const copied_data = [...studentList];
            const newData = copied_data.filter((Student) => Student.id !== id);
            setStudentList(newData);
        },
        [studentList],
    );

    const resetStudent = useCallback(({ id, name }: Student) => {
        setStudentList((prev) => {
            const newData = [...prev];
            setStudentList([]);
            return newData;
        });
    }, []);

    useEffect(() => {
        console.log('studentlist', studentList);
    }, [studentList]);

    const value = {
        studentList,
        setStudentList,
        addStudent,
        deleteStudent,
        removeStudent,
        resetStudent,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// const useAppContext = () => {
//     const context = useContext(AppContext);
//     if (context === undefined) {
//         throw new Error('Error context undefined');
//     }
//     return context;
// };

export { AppContext, AppProvider };
