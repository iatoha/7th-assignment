import { useState } from "react";
import Course from "./Course";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Courses = ({handleCart}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./CreateJsonData.json")
        .then((response) => response.json())
        .then((data) => setCourses(data));
    }, []);
    return (
        <div className=" lg:grid grid-cols-2 gap-4">
            {
                courses.map((course) =>  
                    <Course handleCart={handleCart} key={course.id} course={course} />  
                )
            }
        </div>
    );
};

export default Courses;