import inve from '../img/portImages/Inve.png';
import ecome from '../img/portImages/Ecome.png';
import gema from '../img/portImages/Gema.png';
import mcc from '../img/portImages/MC.png';
import alke from '../img/portImages/ALKEMY BANNER.png';

const portfolios = [
    {
        id: 1,
        category: 'Fullstack',
        image: ecome,
        link1: 'https://github.com/mar-romero/Proyecto-Final',
        title: 'E-commerce Bola de nieve.',
        subtitle:'Node, React, Redux, Mongo y JWT',
        text: 'E-commerce autogestionable, por el cual  dia el dueño de la pagina puede subir eliminar o modificar usuarios, pedidos o productos. Posee un dashboard en el cual podes observar sus crecimientos tanto como en ventas o ususarios creados'
    },
    {
        id: 2,
        category: 'Fullstack',
        image: inve,
        link1: 'https://boladenieve.herokuapp.com/signin',
        title: 'Inventario Bola de nieve',
        subtitle:'Node, HTML, CSS, MySQL y JWT',
        text: 'Inventario de un petshop en el cual puede mantener en orden gracias a la web su stock, ingreso y egreso de mercadería y diferentes autorizaciones de usuarios.'
    },
    {
        id: 3,
        category: 'Frontend',
        image: mcc,
        link1: 'https://github.com/mar-romero/mccoachinginstitute',
        title: 'Mc-coaching Institute',
        subtitle:'HTML y CSS ',
        text: 'Se actualizo el frontend de la web, solo falta ser subido a un servidor cuando el dueño lo requiera'
    },
    {
        id: 4,
        category: 'Backend',
        image: alke,
        link1: 'https://github.com/mar-romero/Alkemy-Challenger',
        title: 'Challenge Alkemy',
        subtitle:'Node, MySLQ, Sequelize y JWT ',
        text: 'Desafío de Alkemy para ingresar a su academia, es API para explorar el mundo de Disney, la cual permite conocer y modificar los personajes que lo componen y entender en qué películas estos participaron.'
    },
    {
        id: 5,
        category: 'Fullstack',
        image: gema,
        link1: 'https://logisticagema.com/calculadora.html',
        title: 'Logística Gema',
        subtitle:'JavaScript, PHP, HTML y CSS ',
        text: 'Mejorar los procesos logísticos de mudanzas y su inscripción de nuevos empleados'
    },
]

export default portfolios;
