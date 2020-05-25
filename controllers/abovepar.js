const express = require('express')
const scoreController = express.Router();
const Score = require('../models/abovepar.js')
const show = console.log

////////////////
//// ROUTES ////
////////////////

const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    }else {
        res.redirect('/sessions/new')
    }
}


//INDEX ROUTE
scoreController.get ('/', (req, res) => {
    const thisRunsNext = (error, allScores) => {
        show('i ran after')
        if(error){
            show(error)
        } else {
            const props = {
                score: allScores,
                username: req.session.currentUser
            }
            res.render('Index', props)
        }
    }
    Score.find({}, thisRunsNext)
})

//TRACKER ROUTE
scoreController.get('/tracker', isAuthenticated, (req, res) => {
    const thisRunsNext = (error, allScores) => {
        show('i ran after')
        if(error){
            show(error)
        } else {
            const props = {
                score: allScores,
                username: req.session.currentUser
            }
            res.render('Tracker', props)
        }
    }
    Score.find({}, thisRunsNext);
    // Score.find({overall}, {$avg: {overall}}, (error, overallScore) => {
    //     if(error){
    //         show(error)
    //     } else {
    //         show(overallScore)
    //     }
    // });
})

//NEW ROUTE
scoreController.get('/new', (req, res) => {
    res.render('New', {
        username: req.session.currentUser
    })
})

//SHOW ROUTE
scoreController.get('/:id', (req, res) => {
    Score.findById(req.params.id, (error, foundScore) => {
        if(error){
            show(error)
        } else {
            res.render('Show', {
                score: foundScore,
                username: req.session.currentUser
            })
        }
    })
})

//CREATE ROUTE 
scoreController.post('/', (req, res) => {
    show(req.body)
    Score.create(req.body, (error, createdScore) => {
        if(error) {
            show(error)
        } else {
            res.redirect('/abovepar/tracker')
        }
    })
    show(req.body)
    show(overallArray)
})

//EDIT ROUTE
scoreController.get('/edit/:id', (req, res) => {
    Score.findById(req.params.id, (error, foundScore) => {
        res.render('Edit', {
            score: foundScore,
            username: req.session.currentUser
        })
    })
})

//UPDATE ROUTE
scoreController.put('/edit/:id', (req, res) => {
    Score.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/abovepar/tracker')
    })
})

//DELETE ROUTE
scoreController.delete('/:id', (req, res) => {
    Score.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/abovepar/tracker')
    })
})

//EXPORT
module.exports = scoreController