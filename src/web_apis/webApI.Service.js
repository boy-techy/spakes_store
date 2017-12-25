import axios from 'axios';


export const GET = (url,config) => {
    // config = config;
    return axios.get(url,config);
};

export const POST = (url,payload,config) => {
    return axios.post(url,payload,{headers: config});
};

export const PUT = () => {

};

export const DELETE = () => {

};



