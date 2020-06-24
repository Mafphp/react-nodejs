const UserRepository = require('../Repositories/userRepository');

class UserController {
    create() {}
    delete() {}
    update() {}
    promote() {}
    async getAll(req, res) {
        const result = await UserRepository.getAll()
        res.json(result)
    }
}

module.exports = new UserController();