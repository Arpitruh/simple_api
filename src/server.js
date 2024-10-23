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
 *  |     ROUTES   ---->   CONTROLLER   ---->  SERVICES  |
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
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(express.json());


//IMPORTING ROUTES 
app.use('/api/auth', authRoutes);



// SERVER ENTRY POINT 
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
