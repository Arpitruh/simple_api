const { signupService, loginService } = require('../services/authService');



//aRPIT BHAI YE HAI CONTROLLER YAHA AEGA REQUEST PROCESS HONE K LIYE 
const authController = {
    signupController: async (req, res) => {
        const { username, password } = req.body;
        console.log("=======", req.body)
        const result = await signupService(username, password);

        if (result.success) {
            res.status(201).json({ message: 'User created successfully', user: result.user });
        } else {
            res.status(400).json({ message: result.message });
        }
    },


    loginController: async (req, res) => {
        const { username, password } = req.body;
        console.log("=======", req.body)
        const result = await loginService(username, password);

        if (result.success) {
            res.status(200).json({ message: 'Login successful', user: result.user });
        } else {
            res.status(401).json({ message: result.message });
        }
    }
};

module.exports = authController;
