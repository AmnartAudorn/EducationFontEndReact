import axios from 'axios';

const SEARCH_STUDENT_API_BASE_URL = "http://localhost:8082/api/v1/searchStudent";
const CREATE_STUDENT_API_BASE_URL = "http://localhost:8082/api/v1/createStudent";
class StudentService{

    getStudent(){
        return axios.get(SEARCH_STUDENT_API_BASE_URL);
    }

    createStudent(student){
        return axios.post(CREATE_STUDENT_API_BASE_URL, student)
    }
}

export default new StudentService()