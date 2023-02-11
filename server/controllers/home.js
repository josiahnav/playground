exports.post = (_, res) => {
    console.log('Post request received');
    res.status(200).send();
};

exports.delete = (_, res) => {
    console.log('Delete request received');
    res.status(200).send();
};

exports.put = (_, res) => {
    console.log('Put request received');
    res.status(200).send();
};