import process from 'node:process';
import {Router} from 'express';

const router = new Router();

router.get('/', async (_request, response) => {
	const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now(),
	};
	try {
		response.send(healthcheck);
	} catch (error) {
		healthcheck.message = error;
		response.status(503).send();
	}
});

/**
 * TODO: add further things to check (e.g. connecting to dababase)
import queries from '../controllers/db-controller.js';
router.get('/database', (_request, response) => {
	let result;
	result === true ? response.send({status: 200}) : response.send({status: 500});
});
*/

export default router;
