const fs = require('fs'); // Afor file system operations
const path = require('path'); //for file path operations
const users = [];

//NOTE: THIS IS SIDDHARTH  AND ARPIT WRITING CMNTS 

//yhi standers structure hota hai functional approch me likhne k liye js 


const authService = {

    //Arpit bhai ye signup service hai 
    signupService: async (username, password) => {
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return { success: false, message: 'Username already exists' };
        }

        const newUser = { id: users.length + 1, username, password };
        users.push(newUser);
        return { success: true, user: { id: newUser.id, username: newUser.username } };
    },

    //Aur ye wala login service hai 
    loginService: async (username, password) => {
        const user = users.find(user => user.username === username && user.password === password);
        if (users) {
            return { success: true, user: "Logged in " };
        } else {
            return { success: false, message: 'Invalid credentials' };
        }
    },


    //This a funtion to fetch and parse user data from the JSON file
    getUsers: () => {
        return new Promise((resolve, reject) => {
            const jsonFilePath = path.join(__dirname, '../Data/data.json');

            fs.readFile(jsonFilePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(new Error('Error reading JSON file: ' + err.message));
                }

                try {
                    const jsonData = JSON.parse(data);
                    resolve(jsonData); // Return the parsed data
                } catch (parseErr) {
                    reject(new Error('Error parsing JSON data: ' + parseErr.message));
                }
            });
        });
    }

};

module.exports = authService;
