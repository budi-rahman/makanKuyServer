const errorHandlers = (err, req, res, next)=> {
    if (err) {    
      if (err.name == "SequelizeUniqueConstraintError") {
        const errorMsg = err.errors.map(err => {
        return {
          message : err.message,
          column : err.path
          }
        })
      res.status(400).json(errorMsg)
      } else {
        res.status(500).json({ msg: 'Internar server error'})
      }
    }
}

module.exports = errorHandlers