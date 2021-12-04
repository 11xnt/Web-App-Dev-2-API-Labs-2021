import express from 'express';
import { genres } from './genresData';
import asyncHandler from 'express-async-handler';
import Genre from './genreModel';

const router = express.Router();

// Get all genres
router.get('/', async(req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

// // Get all genres
// router.get('/', async (req, res) => {
//     const users = await User.find();
//     res.status(200).json(genres);
// });

export default router;