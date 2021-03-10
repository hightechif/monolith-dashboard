const home = (req, res) => {
  res.render('pages/default/home')
}

const notFound = (req, res) => {
  res.render('pages/default/not-found')
}

const error = (req, res) => {
  res.render('pages/default/error')
}

module.exports = {
  home,
  notFound,
  error
}