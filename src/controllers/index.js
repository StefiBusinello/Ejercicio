const users = require('../users');


exports.getList = (req, res) => {
    return res.send (users.list())
};

exports.saveUser = (req, res) => {
    return res.json(users.save(req.body))
};

exports.deleteUser = (req, res) => {
    return res.json(users.delete(req.params.id));
};

exports.updateUser = (req, res) => {
    return res.json(users.update(req.params.id, req.body));
};