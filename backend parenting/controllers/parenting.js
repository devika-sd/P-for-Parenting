const feed = require('../models/feedschema');
const asyncHandler = require('../middleware/async');

console.log('attempting to connect parenting route')

const getAllQuestions = asyncHandler(async (req, res) => {
    feed.find({}, function (err, feeds) {
        console.log("found")
        res.json(feeds)
    })
})

const getQuestionsById = asyncHandler(async (req, res) => {
    feed.findOne({ _id: req.params.id }, function (err, feeds) {
        console.log("found")
        res.json(feeds)
    })
})

const postQuestions = asyncHandler(async (req, res) => {
    feed.findOne({ question: req.body.question }, function (err, doc) {
        console.log("found")
        if (doc) {
            res.json({ message: "this question is already exist" })
        }
        else {
            var quest = new feed({
                question: req.body.question
            })
            quest.save(function (err, feeds) {
                if (err) {
                    return console.error(err);
                }
                console.log("saved to parenting collection")
                res.status(200).json({
                    "message": "Data received", "data": feeds
                })
            })
        }
    })
})

const postAnswerToQuestion = asyncHandler(async (req, res) => {
    var ques_id = req.params.id;

    let doc = await feed.findOne({ _id: ques_id });
    if (doc.answer.includes(req.body.answer)) {
        var loc = doc.answer.indexOf(req.body.answer);
        doc.count.set(loc, doc.count[loc] + 1);
        doc.save().then(savedDoc => {
            res.status(200).json({
                "data": savedDoc
            })
        });
    }
    else {
        feed.findByIdAndUpdate(ques_id, { $addToSet: { answer: { solution: req.body.answer } } }, {
            new: true,
            runValidators: true
        }).then(data => {
            res.status(200).json({
                "data": data
            })
        })
    }
})

module.exports = { getAllQuestions, getQuestionsById, postQuestions, postAnswerToQuestion };