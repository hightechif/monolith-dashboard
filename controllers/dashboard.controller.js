const moment = require('moment');
const { Article } = require('../models')
const sequelize = require('sequelize');

// const posts = [
//   {
//     id: 1,
//     title: 'Harry Potter',
//     body: 'Voldemort kill Dumbledore',
//     createAt: Date()
//   },
//   {
//     id: 2,
//     title: 'Tom Sawyer',
//     body: 'The adventure of Tom Sawyer',
//     createAt: Date()
//   }
// ]

const home = async (req, res) => {
  let postCounter;
  let readerCounter;

  try {
    postCounter = await Article.count();
    readerCounter = await Article.findAll({
      attributes: [
        [sequelize.fn('sum', sequelize.col('read_count')),
        'totalReader']
      ]
    })
    console.log(readerCounter);
  } catch (error) {
    return res.render('pages/default/error');
  }

  const locals = {
    data: {
      Post: postCounter,
      Visitor: readerCounter[0].dataValues.totalReader,
      Reader: readerCounter[0].dataValues.totalReader
    },
    contentTitle: "Statistic",
    layout: 'layouts/dashboard'
  }
  return res.render('pages/dashboard/home', locals)
}

const post = async (req, res) => {
  let posts;
  try {
    posts = await Article.findAll({
      where: {
        approved: true
      }
    })
  } catch (error) {
    return res.render('pages/default/error');
  }
  
  const locals = {
    data: {
      posts: posts.map(i => {
        i.fromNow = moment(i.createAt).fromNow()
        return i
      })
    },
    contentTitle: 'Post',
    layout: 'layouts/dashboard'
  }
  return res.render('pages/dashboard/post', locals)
}

module.exports = {
  home,
  post
}