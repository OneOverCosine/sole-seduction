import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

router.route(`/`).get(async (req, res) => {
    try {
        User.find({}).then((users) => {
            console.log(users);
            res.send(users);
        }).catch(err => {
            console.error(err);
        })
    }
    catch (err) {
        console.error(err);
    }
});

export { router as users };