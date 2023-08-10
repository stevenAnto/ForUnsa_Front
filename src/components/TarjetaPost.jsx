import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll, getOnly } from "../api/jspost";
import { like,dislike } from "../static/js/main.js";
import '../static/css/tarjeta.css'
import { TarjetaComentario } from "./TarjetaComentario";
import ModalComponent from "./ModalComponent"

export function TarjetaPost(props) {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const user= localStorage.getItem('user_id');

    let post= props.post
    const navigate= useNavigate()
    const fecha = new Date(post.updated_at);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric' });
    const imagen = post.img;
    const pdf= post.file;

    const onClickLike = () => {
      like(post.id)
    };

    const onClickDislike = () => {
      dislike(post.id)
    };

    const [datos, setDatos]= useState([]);
    useEffect (() => {
      async function loadDatos(){
        const res = await getOnly('user', post.user);
        setDatos(res.data);
      }
      loadDatos();
    }, []);

    const [coms, setComs]= useState([]);

    useEffect (() => {
        async function loadComms(){
            const res = await getAll('comment');
            const ord = [...res.data].filter(item => item.posted_on === post.id);
            setComs(ord);
        }
        loadComms();
    }, []);

    const [users, setUsers]= useState([]);

    useEffect (() => {
        async function loadUsers(){
            const res = await getAll('user');
            const ord = [...res.data];
            setUsers(ord);
        }
        loadUsers();
    }, []);

    return(
        <div className="postContainer" key={post.id}>
            <div className="postContainerf1">
              <div className="fotoPerfil">
                <img src={datos.img} className="fotoPerfilTarjeta" alt="foto de Usuario"/>
              </div>
              <div className="derechaFoto">
                <div className="topicosContainer">
                  <div className="topicoCurso">
                    {post.title}
                  </div>
                  {localStorage.getItem('user_id') === null ? (
                    <div>
                      <div className="topicoTresPuntos">
                        <i className="fa-solid fa-ellipsis" onClick={handleShow}></i>
                        <ModalComponent
                        show={showModal}
                        onHide={handleClose}
                        title="Inicie sesión"
                        content="This is the content of the modal."
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="topicoTresPuntos" 
                      onClick={()=>{
                          if(user== post.user){
                            navigate('/post/' + post.id);
                          }else{
                            window.alert("No puedes editar este post");
                          }
                      }}
                      >
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  )}
                </div>
                <div className="NombreFecha">
                  <div className="nombre">
                    {datos.username}
                  </div>
                  <div className="fechaPublicacion">
                    {fechaFormateada}
                  </div>
                </div>
              </div>
            </div>
            <div className="postContainerf2" >
              {post.content}
            </div>
            <div className="postContainerf3">
                <ListTags tags={post.tags} c={post.id}/>
            </div>
            {imagen && 
            <div className="postContainerf4">
              <img src={imagen} width="70%" alt="publicacion"/>              
            </div>}
            {pdf &&
            <div className="postContainerf6">
              <br />
              <i className="fas fa-file-pdf pdf-icon"></i>
              <a href={pdf} target="_blank">{decodeURIComponent(pdf.substring(33))}</a>
            </div>}
            <div className="postContainerf5">
              <div className="likes">
                <i id={"iclk" + post.id} data-active="0" className="fa-regular fa-thumbs-up" onClick={onClickLike}></i>
                <div className="likescount" id={"lk" + post.id}>{post.likes_count}</div>
                <i id={"icdlk" + post.id} data-active="0" className="fa-regular fa-thumbs-down" onClick={onClickDislike}></i>
                <div className="dislikescount" id={"dlk" + post.id} >{post.dislikes_count}</div>
              </div>
              <div className="derechaLike">
                <i className="fa-regular fa-comment-dots"></i>
                <div>Ver {post.comments_count} comentarios</div>
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>

            <div className="comentarios">
                <ListComentarios coms={coms} users={users} />
            </div>
        </div>
    );
    /*return(
        <div key={post.id}
            onClick={()=>{
                navigate('/post/' + post.id)
            }}
        >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <ListTags tags={post.tags} c={post.id}/>
            <p>{post.rate}</p>
        </div>
    );*/
}

export function ListTags({tags,id}){
  return (
      <div className="containerTags">
          {tags.map( tag => (
              <div key={tag + id} className="tags"><a className="numtag" href={"http://localhost:5173/tag/" + tag}>{tag}</a></div>
          ))}
      </div>
  );
}

export function ListComentarios({coms}){
  if (coms.length > 0)
  return (
      <div className="containerTags">
          {coms.map( com => (
              <div key={com.id} className="Contentcomment">
                <TarjetaComentario com={com} />
              </div>
          ))}
      </div>
  );
}