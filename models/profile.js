import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  reviewer: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  photo: String,
  role:{
    type: Number,
    required: true
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true
  },
  aboutMe: {
    type: String,
  },
  skills: {
    type: String,
  },
  myVenues:[{type: Schema.Types.ObjectId,ref: 'Venue'}],
  myWorkshops:[{type: Schema.Types.ObjectId,ref: 'Workshop'}],
  reviews: [reviewSchema]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
