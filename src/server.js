/*******************************************************************************************
 * 
 *  @Author : Siddharth Sabron
 *  @Email  : siddharth.sabron@gmail.com
 *  @Link   : https://siddharthsabron.in
 * 
 *******************************************************************************************/



/**
 *  +----------------------------------------------------+
 *  |                    API FLOW                        |
 *  +----------------------------------------------------+
 *  |                                                    |
 *  |   ROUTES   ---->   CONTROLLER   ---->  SERVICES    |
 *  |                                                    |
 *  |                                                    |
 *  |  ROUTES: Define the API endpoints and handle       |
 *  |          incoming requests.                        |
 *  |                                                    |
 *  |  CONTROLLER: Process the request logic,            |
 *  |              validate inputs, and direct flow      |
 *  |              to the respective service.            |
 *  |                                                    |
 *  |  SERVICES: Handle the business logic, interact     |
 *  |            with databases or external APIs,        |
 *  |            and return responses to the controller. |
 *  |                                                    |
 *  +----------------------------------------------------+
 */


// importing files and libraries 
const express = require('express');

//this method reads the Json file 
const fs = require('fs');

//bilt in node.js module for working and manipulating file and directory path
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());


//IMPORTING ROUTES 
app.use('/api/auth', authRoutes);

// Set up a new GET route directly in server.js
app.get('/users', (req, res) => {
    const jsonFilePath = path.join(__dirname, '../Data/data.json');

    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        try {
            const jsonData = JSON.parse(data);
            res.status(200).json(jsonData);
        } catch (parseErr) {
            console.error('Error parsing JSON data:', parseErr);
            res.status(500).json({ message: 'Error parsing data' });
        }
    });
});

// SERVER ENTRY POINT 
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
