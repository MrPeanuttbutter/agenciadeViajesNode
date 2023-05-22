import express from 'express';
import { 
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginainfoviaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialesController.js';

const router=express.Router();

router.get('/',paginaInicio);
router.get('/nosotros',paginaNosotros)
router.get('/viajes',paginaViajes)

//usando un comodin para acceder a una url diferente dependiendo del parametro dado a la url.
router.get('/viajes/:slug',paginainfoviaje)

router.get('/testimoniales',paginaTestimoniales)
router.post('/testimoniales',guardarTestimonial)

export default router;




































// import express from 'express';
// import { 
//     paginaInicio, 
//     paginaNosotros, 
//     paginaViajes, 
//     paginaTestimoniales, 
//     paginaDetalleViaje 
// } from '../controllers/paginasController.js';

// import { guardarTestimonial } from '../controllers/testimonialesController.js';

// const router = express.Router();

// router.get('/', paginaInicio);

// router.get('/nosotros', paginaNosotros);

// router.get('/viajes', paginaViajes);

// router.get('/viajes/:slug', paginaDetalleViaje);

// router.get('/testimoniales', paginaTestimoniales);


// // Cuando Lleno el form
// router.post('/testimoniales', guardarTestimonial);


// export default router;