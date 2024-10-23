const users = [];

//NOTE: THIS IS SIDDHARTH WRITING CMNTS 
//code ka structure padh lo achee se 
//yhai standers structure hota hai functional approch me likne k liye js 
//code ka struture khrab hua to gand fad denge tumhri 

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
        //const user = users.find(user => user.username === username && user.password === password);
        if (users) {
            return { success: true, user: "Logged in "};
        } else {
            return { success: false, message: 'Invalid credentials' };
        }
    },
};

module.exports = authService;
