const express = require('express')
const scoreController = express.Router();
const Score = require('../models/abovepar.js')
const show = console.log

////////////////
//// ROUTES ////
////////////////

//INDEX ROUTE
scoreController.get ('/abovepar', (req, res) => {
    const thisRunsNext = (error, allScores) => {
        show('i ran after')
        if(error){
            show(error)
        } else {
            const props = {
                score: allScores
            }
            res.render('Index', props)
        }
    }
    Score.find({}, thisRunsNext)
})

//TRACKER ROUTE
scoreController.get('/tracker', (req, res) => {
    const thisRunsNext = (error, allScores) => {
        show('i ran after')
        if(error){
            show(error)
        } else {
            const props = {
                score: allScores
            }
            res.render('Tracker', props)
        }
    }
    Score.find({}, thisRunsNext)
})

//NEW ROUTE
scoreController.get('/new', (req, res) => {
    res.render('New')
})

//SHOW ROUTE
scoreController.get('/:id', (req, res) => {
    Score.findById(req.params.id, (error, foundScore) => {
        if(error){
            show(error)
        } else {
            res.render('Show', {
                score: foundScore
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
})

//EDIT ROUTE
scoreController.get('/edit/:id', (req, res) => {
    Score.findById(req.params.id, (error, foundScore) => {
        res.render('Edit', {
            score: foundScore
        })
    })
})

//UPDATE ROUTE
scoreController.put('/edit/:id', (req, res) => {
    Score.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/abovepar')
    })
})

//DELETE ROUTE
scoreController.delete('/:id', (req, res) => {
    Score.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/abovepar')
    })
})

//EXPORT
module.exports = scoreController