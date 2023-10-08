"use client"
import {getDocs, collection, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "@/config/firebase"

function page() {
  const [courses , setCourses]=useState([])
  const [id ,setId]=useState("")
  const fetchData =async()=>{
  try {
    const collectionName = collection(db,"course")
    const docs = await getDocs(collectionName)
    const courseData = []
    docs.forEach((doc)=>{
      console.log(doc.data());
      courseData.push({
        id:doc.id,
        ...doc.data()
      
      })
    })
    setCourses(courseData)
  } catch (error) {
    console.log(error)
  }
  }
  useEffect(() => {
    fetchData()
   }, [])

   const deleteHandler= async (id)=>{
    const docRef = doc(db,"course", id )
    try {
      setId(id)
      await deleteDoc(docRef)
      const newCourses = courses.filter((course)=>id !== course.id)
      setCourses(newCourses)
    } catch (error) {
      console.log("error",error)
    }
   }
   const onUpdateHandler = async (id)=>{
    try {
      const docRef = doc(db,"course", id)
      setId(id)
      await updateDoc(docRef, {
        desc:"new image here"
      })
      fetchData()


    } catch (error) {
      alert("error")
    }
  }
  return (
    
    <div>
{
  courses.map((course)=>{

    return(
      <div>
        <h1>
          {course.id}
        </h1>
        <h1>{course.name}</h1>
        <h2>{course.code}</h2>
        <p>{course.desc}</p>
        <button onClick={()=>deleteHandler(course.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">delete</button>
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{onUpdateHandler(course.id)}}>update</button>
        <hr />
      </div>
    )
})}

    </div>
  )
}

export default page