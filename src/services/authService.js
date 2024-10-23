const users = [];

exports.signup = (username, password) => {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return { success: false, message: 'Username already exists' };
    }
    
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    return { success: true, user: { id: newUser.id, username: newUser.username } };
};

exports.login = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        return { success: true, user: { id: user.id, username: user.username } };
    } else {
        return { success: false, message: 'Invalid credentials' };
    }
};
