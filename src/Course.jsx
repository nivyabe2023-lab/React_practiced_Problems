import Navbar from './navbar.jsx'
import loadingimage from './loadingimage.webp'
import useFetch from './useFetch.jsx'
function Course (){
    const[Courses,setCourses,error] = useFetch("http://localhost:3090/Courses");
        function handleDelete(id){
            console.log(id);
            const newCourse = Courses.filter((Course)=>Course.id !== id)
            setCourses(newCourse);
        }
        //courses.sort((x,y)=>x.price-y.price)  
        //const vfrcourses = courses.filter((course)=>course.price<200000)
        if(Courses.length === 0){
            return(
                <>
                {!error && <img src = {loadingimage}></img>}
                {error && <p>{error}</p>}
                </>
            )
        }
        
        const coursess = Courses && Courses.map((Course)=> <Navbar key = {Course.id} name = {Course.name} price = {Course.price} image = {Course.image} rating = {Course.rating} onDelete ={handleDelete} id = {Course.id}/>)

        return(
            <>
            {coursess}
            </>
        );
    }
export default Course;