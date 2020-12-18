import axios from 'axios';

const SEARCH_ENROLMENT_API_BASE_URL = "http://localhost:8082/api/v1/searchEnrolment";
const CREATE_ENROLMENT_API_BASE_URL = "http://localhost:8082/api/v1/createEnrolment";
const POST_ENROLMENT_API_BASE_URL = "http://localhost:8082/api/v1/searchEnrolmentSubject";
const GET_ENROLMENT_API_BASE_URL = "http://localhost:8082/api/v1/searchEnrolmentSubject";

class EnrolmentService{

    getEnrolment(){
        return axios.get(SEARCH_ENROLMENT_API_BASE_URL);
    }

    createEnrolment(enrolment){
        return axios({
            method: 'post',
            url: CREATE_ENROLMENT_API_BASE_URL,
            data: enrolment
          });
    }

    getEnrolmentStudent(enrolment){
        return axios({
            method: 'post',
            url: POST_ENROLMENT_API_BASE_URL,
            data: enrolment
          });
    }

    getEnrolmentStudent2(){
        return axios.get(GET_ENROLMENT_API_BASE_URL);
    }
}

export default new EnrolmentService()