import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { create, getOnly, update, ruta} from "../api/jspost";
import { useNavigate, useParams } from "react-router-dom";
import '../static/css/postForm.css'
import { ListTags } from "../components/ListTag";
import { indexTag } from "../static/js/main.js";

export function PostFormPage() {
    const {register, handleSubmit, formState:{errors}, setValue}= useForm();
    const navigate= useNavigate();
    const params= useParams();
    const user= parseInt(localStorage.getItem('user_id'));

    const onCancelar = () => {
      // Redirigir a la página principal
      navigate('/post');
    };

    const onSubmit = handleSubmit(async data => {
      let formdata= new FormData()
      formdata.append('title', data.title)
      formdata.append('content', data.content)
      formdata.append('user', user)
      let campoimg= document.getElementById("inputImagen")
      let campopdf= document.getElementById("inputPdf")

      //Extrae el tag
      /*const tagInput = document.getElementById('TagInput');
      const opciones = document.getElementById('opciones');
      const valorSeleccionado = tagInput.value;      
      for (let i = 0; i < opciones.options.length; i++) {
        if (opciones.options[i].value === valorSeleccionado) {
          formdata.append('tags', i + 1)
        }
      }*/
      let indice = indexTag;
      if(indice > 0){
        formdata.append('tags', indice);
      }

      if(campoimg.files.length > 0){
        formdata.append('img', campoimg.files[0])
      }
      if(campopdf.files.length > 0){
        formdata.append('file', campopdf.files[0])
      }     
      
      let dir= ruta + "post/";
      navigate('/post');
      if(params.id){
        console.log(formdata.get('tags'))
        //await update('post',params.id, data);
        dir+= params.id + "/"
        let newpost = await fetch(dir,{
          method: 'PUT',
          body: formdata
        }).then(responde => responde.json).catch(error =>{
          console.error(error);
        })        
      } else{
        //await create('post',formdata);
        let newpost = await fetch(dir,{
          method: 'POST',
          body: formdata
        }).then(responde => responde.json).catch(error =>{
          console.error(error);
        })
      }
    })

    const onDelete = handleSubmit(async data => {
      const accepted= window.confirm('¿Estas seguro?')
      if(accepted){      
        let formdata= new FormData()
        formdata.append('title', data.title)
        formdata.append('content', data.content)
        formdata.append('user', user)
        formdata.append('state','X')
        let dir= ruta;
        dir+= params.id + "/"
        let newpost = await fetch(dir,{
            method: 'PUT',
            body: formdata
          }).then(responde => responde.json).catch(error =>{
            console.error(error);
          })        
        navigate('/post');
      }
    });

    useEffect(()=>{
        async function loadPost(){
            if(params.id){
                const res= await getOnly('post',params.id);
                setValue('title', res.data.title);
                setValue('content', res.data.content);
            }
        }
        loadPost();
    },[])

    return(
      <div className="paraCentrar">
        <form class ="crearPostContainer" action="" onSubmit={onSubmit} encType="multipart/form-data">
              <div className="crearPostF1">Crear Publicacion</div>
              <div className="crearPostF2">
                <div className="labelTitulo">Titulo</div>
                <div className="inputTitulo">
                  <input className="inputCrearPost" type="text" placeholder="Titulo" {...register("title",{required: true})}/>
                </div>
              </div>
              <div className="crearPostF3">Contenido</div>
              <div className="crearPostF4">
                <textarea placeholder="Escribe aqui tu post" {...register("content",{required: true})}></textarea>
              </div>
              <div>
              </div>
              <div className="crearPostF5">
                <div className="inputsAnadir">
                  <div className="addImg">
                    <input type="file" id="inputImagen" accept="image/*"/>
                  </div>
                  <div className="addDoc">
                    <input type="file" id="inputPdf" accept=".pdf"/>
                  </div>
                  <div className="secctioCrear">Seccion</div>
                  <div className="addEsc">Mi escuela</div>
                </div>
                <div className="creaTags">
                  <div className="labelTags">Tags</div>
                  <ListTags/>
                </div>
              </div>
              <div className="crearPostF6">
                <button type="submit" className="subirCrear" >Subir</button>
                <button type="button" className="subirCancelar" onClick={onCancelar}>Cancelar</button>
                {params.id &&
                <button type="button" className="subirCancelar" onClick={onDelete} >Eliminar publicación</button>}
              </div>
            </form>
        </div>
        /*<div>
            <form action="" onSubmit={onSubmit}>
                <input type="text"
                    placeholder="Titulo de la publicación"
                    {...register("title",{required: true})}/>
                <textarea name="" id="" cols="30" rows="10"
                    placeholder="Titulo de la publicación"
                    {...register("content",{required: true})}
                ></textarea>
                <input type="hidden"
                    value="2"
                    {...register("user",{required: true})}/>
                <button>Publicar</button>
            </form>
            {params.id &&
                <button onClick={ async () => {
                    const accepted= window.confirm('¿Estas seguro?')
                    if(accepted){
                        CONFIGURAR EL OCULTO
                        await deletePost('post',params.id);
                        navigate('/post')
                    }
                }} >Eliminar publicación</button>}
        </div>*/
    )
}
