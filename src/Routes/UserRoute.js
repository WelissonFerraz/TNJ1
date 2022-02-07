const UserController = require('../Controller/UserController');
module.exports = (app) => {
    app.post('/user', UserController.post);
    app.put('/user/:id', UserController.put);
    app.get('/user',UserController.get);
    app.get('/user/:id',UserController.getById);
}