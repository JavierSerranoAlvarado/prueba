/* Mostrara comentarios y publicaciones
 */import {mostrarPublicacion} from './mostrarPublicacion.js';
import {agregarComentario} from './mostrarPublicacion.js';

const publicaciones = async () => {
    const uno = await mostrarPublicacion(
        {'id':'1',
        'src':'https://www.muycomputer.com/wp-content/uploads/2020/12/Cyberpunk-2077-12.jpg',
        'alternativo':'¿Que tal esta cyberpunk?',
        'titulo':'¿Que tal esta cyberpunk?',
        'descripcion':'¿Quieres saber como esta el juego mas esperado de los ultimos años? ¡Sigueme en mi Stream para conocerlo!'
        });;
    const dos = await agregarComentario({'comentario':'muy bueno'})

}
publicaciones();