import axios from 'axios';

const SEARCH_TEACHER_API_BASE_URL = "http://localhost:8082/api/v1/searchTeacher";
const CREATE_TEACHER_API_BASE_URL = "http://localhost:8082/api/v1/createTeacher";
class TeacherService{

    getTeacher(){
        return axios.get(SEARCH_TEACHER_API_BASE_URL);
    }

    createTeacher(teacher){
        return axios.post(CREATE_TEACHER_API_BASE_URL, teacher)
    }
}

export default new TeacherService()