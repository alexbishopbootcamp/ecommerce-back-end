const sequelize = require('../config/connection');
const fs = require('fs');

// Read and execute schema.sql file
const createDatabase = async () => {
    try {
        const sql = fs.readFileSync('./db/schema.sql', 'utf8');
        await sequelize.query(sql);
        console.log('Database created successfully!');
    } catch (err) {
        console.log(err);
    }
}

createDatabase();