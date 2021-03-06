/* eslint-disable camelcase */
import mongoose from 'mongoose';

const {Schema} = mongoose;

const puzzleDefinition = new Schema({
	initial_fen: {type: String},
	moves_uci: {type: String},
	rating: {type: Number},
	rating_deviation: {type: Number},
	popularity: {type: Number},
	num_plays: {type: Number},
	puzzle_themes: {type: String},
	game_url: {type: String},
});

const PuzzleSchema = new mongoose.Schema(puzzleDefinition);
const Puzzle = mongoose.model('Puzzle', PuzzleSchema);

const puzzleModel = {
	definition: puzzleDefinition,
	schema: PuzzleSchema,
	model: Puzzle,
};

export default puzzleModel;
