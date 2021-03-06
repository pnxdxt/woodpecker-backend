import {Router} from 'express';

const router = new Router();

class Puzzle {
	constructor(length) {
		this.puzzles = ['_id-01', '_id-02', '_id-03'];
		this.numberOfPuzzle = length;
		this.tries = 0;
		this.successRate = 0;
		this.bestTime = 0;
	}
}

// Get a puzzle from an id
router.get('/:id', async (_request, _response) => {});

// Get mutiple puzzles from an array of id
router.post('/many/:ids', async (_request, _response) => {});

// Create new set of puzzle
router.get('/set', async (_request, _response) => {
	// Try to find 25 puzzles (not already in a set ?) of this user in the db

	// if it is not possible, add new games from the user to the db then analyze

	// create a object ? or an array ?
	const puzzle1 = new Puzzle();
	console.log(puzzle1);

	// Save it in DB
});

// Update a player's set (change best time, change number of try…)
router.put('/set', async (_request, _response) => {});

// Get user last played set ?
router.get('/set:UserId', async (_request, _response) => {});

// Make the set larger ?
router.get('/set', async (_request, _response) => {
	// What is the length of the set
	// if it is not max then add puzzles to the set ?
});

export default router;
