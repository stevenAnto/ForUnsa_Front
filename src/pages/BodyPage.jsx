import { LeftColumn } from "../components/LeftColumn";
import { MidColumn } from "../components/MidColumn";
import { RigthColumn } from "../components/RigthColumn";
import { useParams } from "react-router-dom";

export function BodyPage(props){
    if(props.do){
        window.location.href="/";
    }
    const params= useParams();
    return(
        <div className="cuerpo">
            <LeftColumn/>
            <MidColumn mod={props.mod} tag={params.id} titulo={params.titulo}/>
            <RigthColumn/>
        </div>
    );
}

export default BodyPage;