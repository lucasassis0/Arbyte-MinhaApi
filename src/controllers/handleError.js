const handleError = (res, error) => {
    console.log("handle error: ", error);
    res.status(error.status || 500).json(error)
}

module.exports = handleError