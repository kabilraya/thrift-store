const { register } = require('module');
const pool = require('./dbconn');
const bcrypt = require('bcrypt');

class User{
    static async registerUser({ username, email, password }) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const [result] = await pool.execute(
                'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                [username, email, hashedPassword]
            );
            return result.insertId;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error; 
        }
    }
    
}