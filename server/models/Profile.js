const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    //I have not created a schema for profile because Clerk handles everything profile related.
})

module.exports = mongoose.model('Profile', ProfileSchema)
