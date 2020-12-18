import axios from 'axios';

const SEARCH_SUBJECT_API_BASE_URL = "http://localhost:8082/api/v1/searchSubject";
const CREATE_SUBJECT_API_BASE_URL = "http://localhost:8082/api/v1/createSubject";
class SubjectService{

    getSubject(){
        return axios.get(SEARCH_SUBJECT_API_BASE_URL);
    }

    createSubject(subject,teacher){
        return axios.post(CREATE_SUBJECT_API_BASE_URL+ '/' + teacher ,subject)
    }

    
}
export default new SubjectService()