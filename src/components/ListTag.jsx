import { useEffect, useState } from "react";
import { getAll } from "../api/jspost";

export function ListTags(){
    const [tags, setTags]= useState([]);

    useEffect (() => {
        async function loadTags(){
            const res = await getAll('tag');
            const ord = [...res.data].sort((a, b) => new Date(a.id) - new Date(b.id));
            setTags(ord);
        }
        loadTags();
    }, []);

    return (
        <div className="inputselect" id= "lista">
            <input className="inputCrearTag" type="text"  id="TagInput" list="opciones" placeholder="Ingrese Tags..."/>
            <datalist id="opciones">
            {tags.map( tag => (
                <option key={tag.id} value={tag.name}></option>
            ))}
            </datalist>
        </div>
    );
}