import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProfileSchema = new Schema({
    //I have not created a schema for profile because Clerk handles everything profile related.
})

export default mongoose.model('Profile', ProfileSchema);
