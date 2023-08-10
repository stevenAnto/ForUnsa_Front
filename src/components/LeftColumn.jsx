import comunicado from "/src/static/images/comunicadoUnsa.jpg";
export function LeftColumn(){
    return(
        <div className="leftColumn">
            <div className="listadoPost">
                <div className="listadoPostTitulo">Listado de Post</div>
                <div className="listadoPostDetalle">
                    <ul className="tree">
                    <li>
                        <details>
                        <summary>Area de Biomedicas</summary>
                        <ul>
                            <li>Agronomía</li>
                            <li>Ingeniería Pesquera</li>
                            <li>Ciencias de la Nutrición</li>
                            <li>Biología</li>
                            <li>Enfermería</li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>Area de Ingenierias</summary>
                        <ul>
                            <li>
                            <details>
                                <summary>Fac. de Ingenieras de Procesos y Produccion</summary>
                                <ul>
                                <li>Esc. de Ing. de Sanitaria</li>
                                <li>Esc. de Ing. de Mecánica</li>
                                <li>Esc. de Ing. de Industrial</li>
                                <li>Esc. de Ing. de Ambiental</li>
                                <li>Esc. de Ing. de Materiales</li>
                                <li>Esc. de Ing. de Industrias Alimentarias</li>
                                <li>Esc. de Ing. de Química</li>
                                <li>Esc. de Ing. de Metalurgica</li>
                                <li>Esc. de Ing Civil</li>
                                <li>Esc. de Ing Minas</li>
                                <li>Esc. de Ing Geológica</li>
                                <li>Esc. de Ing Geofísica</li>
                                <li>Esc. de Química</li>
                                <li>Esc. de Matemáticas</li>
                                <li>Esc. de Física</li>
                                <li>Esc. de Ing. Electrónica</li>
                                <li>Esc. de Ing de Telecomunicaciones</li>
                                <li>Esc. de Ing. Eléctrica</li>
                                <li>Esc. de Cs. de la Comutación</li>
                                <li>Esc. de Ing. de Sistemas</li>
                                </ul>
                            </details>
                            </li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>Area de Sociales</summary>
                        <ul>
                            <li>Ciencias de la comunicación</li>
                            <li>Relaciones Industriales</li>
                            <li>Psicología</li>
                            <li>Literatura y Linguística</li>
                            <li>Filosofía</li>
                            <li>Artes</li>
                            <li>Economía</li>
                            <li>Turismo</li>
                            <li>Antropología</li>
                            <li>Trabajo Social</li>
                            <li>Sociología</li>
                            <li>Historia</li>
                            <li>Educación</li>
                            <li>Finanzas</li>
                            <li>Contabilidad</li>
                            <li>Gestión</li>
                            <li>Banca y Seguros</li>
                            <li>Marketing</li>
                            <li>Administración</li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="comunicados">
                <img src={comunicado} alt="comunicado"/>
            </div>
        </div>
    );
}

export default LeftColumn;
