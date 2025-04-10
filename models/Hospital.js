const mongoose = require('mongoose')

const HospitalSchema = new mongoose.Schema({
    name :{
        type: String,
        require:[true,'Please add aname'],
        unique: true,
        trim:true,
        maxlenght:[50,'Name cannot more than 50 characters']
    },
    address:{
        type:String,
        require:[true ,'Please add an address']
    },
    district:{
        type:String,
        require:[true ,'Please add an district']
    },
    province:{
        type:String,
        require:[true ,'Please add an province']
    },
    postalcode:{
        type: String,
        require:[true,'Please add a postalcode'],
        maxlenght:[5,'Postal Code cannot be more than 5 digits']
    },
    tel:{
        type:String
    },
    region:{
        type: String, 
        require:[true,'Please add a region']
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Reverse populate
HospitalSchema.virtual('appointments', {
    ref: 'Appointment',
    localField: '_id',
    foreignField: 'hospital',
    justOne: false
});

module.exports = mongoose.model('Hospital',HospitalSchema);