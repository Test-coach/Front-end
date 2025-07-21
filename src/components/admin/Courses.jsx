import React, { useEffect, useState } from 'react'
import CourseCard from '../../utils/courseCard/CourseCard'
import axiosInstance from '../../utils/axiosInstance';
import { API_URL } from '../../config';

const Courses = () => {

    const [courses , setCourses] = useState([]);
    useEffect(()=>{
        const fetchCourses = () =>{
            const res = axiosInstance.get(`${API_URL}/admin/courses`)
            console.log("res" , res.data);
            setCourses(res.data);
        }

        fetchCourses();

    },[])

    return (
        <>
            <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                {courses.map((item, index) => (
                    <CourseCard key={index} course={item} />
                ))}
            </div>
        </>
    )
}

export default Courses