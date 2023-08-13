import axios from 'axios'

//export const ruta= 'http://127.0.0.1:8000/forUnsa/';
//export const ruta= 'https://backend-deploy-production-4f42.up.railway.app/forUnsa/';
export const ruta = 'https://forunsa2.onrender.com/forUnsa/';
//export const ruta = process.env.REACT_APP_API_URL

const dir= axios.create({
    baseURL: ruta
})

const dir2= axios.create({
    baseURL: ruta
})

export const getAll = (ent) => {
    return dir.get(`${ent}/`);
}

export const getOnly = (ent,id) => {
    return dir.get(`${ent}/${id}`);
}

export const create = (ent, element) => {
    return dir.post(`${ent}/`, element);
}

export const update = (ent,id, element) =>{
    return dir.put(`${ent}/${id}/`, element);
}

export const subirImagen = (ent, element) =>{
    return dir2.post(`media/${ent}`, element);
}
