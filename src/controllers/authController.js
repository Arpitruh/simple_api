const authService = require('../services/authService');

exports.signup = (req, res) => {
    const { username, password } = req.body;
    const result = authService.signup(username, password);
    
    if (result.success) {
        res.status(201).json({ message: 'User created successfully', user: result.user });
    } else {
        res.status(400).json({ message: result.message });
    }
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    const result = authService.login(username, password);
    
    if (result.success) {
        res.status(200).json({ message: 'Login successful', user: result.user });
    } else {
        res.status(401).json({ message: result.message });
    }
};
