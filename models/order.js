const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    senderName: {
        type: String,
        required: true
    },
    senderLocation: {
        lattitude:{
            type:String,
            required:true
        },
        longitude:{
            type:String,
            required:true
        }
    },
    receiverName: {        
        type: String,
        required: true
    },
    recieverLocation: {
        lattitude:{
            type:String,
            required:true
        },
        longitude:{
            type:String,
            required:true
        }
    },
    packages: [
        {
            height: {
                type: Number,
                required: true
            },
            width: {
                type: Number,
                required: true
            },
            length: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: true
            },
            items: [
                {
                    itemName: {
                        type: String,
                        required: true
                    },
                    itemQuantity: {
                        type: Number,
                        required: true
                    }
                }
            ]
        }
    ],
    trips: [
        {
    shipperName: {
        type: String,
        required: true
    },
    startLocation: {
        lattitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        } 
    },
    endLocation: {
        lattitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        }
    },
    tripStatus: {
        type: String,
        required: true,
        default: 'pending'
    },
        }
    ]
});

module.exports = mongoose.model('Order', orderSchema);


// This is a demo order in JSON format for feeding the database
// {
//     "senderName": "John Doe",
//     "senderLocation": {
//         "lattitude": "123",
//         "longitude": "123"
//     },
//     "receiverName": "Jane Doe",
//     "recieverLocation": {
//         "lattitude": "123",
//         "longitude": "123"
//     },
//     "packages": [
//         {
//             "height": 10,
//             "width": 10,
//             "length": 10,
//             "weight": 10,
//             "items": [
//                 {
//                     "itemName": "item1.1",
//                     "itemQuantity": 10
//                 },
//                 {
//                     "itemName": "item1.2",
//                     "itemQuantity": 10
//                 }
//             ]
//         },
//         {
//             "height": 10,
//             "width": 10,
//             "length": 10,
//             "weight": 10,
//             "items": [
//                 {
//                     "itemName": "item2.1",
//                     "itemQuantity": 10
//                 },
//                 {
//                     "itemName": "item2.2",
//                     "itemQuantity": 10
//                 }
//             ]
//         },
//       ],
//      trips:[
//              {
//                  "shipperName": "shipper1",
//                  "startLocation": {
//                  "lattitude": "123",
//                  "longitude": "123"
//              },
//              "endLocation": {
//              "lattitude": "123",
//              "longitude": "123"
//              },
//              "tripStatus": "pending"
//          }
//       ]
// }
