const mongoose=  require('mongoose');
// const mongoURI = 'mongodb+srv://gofood:saurav123@cluster0.1zvb5hr.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoURI = 'mongodb+srv://food_adda:Swa172002@cluster0.bfajgog.mongodb.net/food_adda_mern?retryWrites=true&w=majority';
// Connecting  mongoDB database await and async both are necessary 
//mongoDB is schema and mongoose is schema-less so we use mongoose for validation of data
const mongoDB = async() =>{
        try{
            await mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true});
            console.log("connected");
            const fetched_data= await mongoose.connection.collection("food_items");
            const data = await fetched_data.find({}).toArray();
            global.food_items= data;
            const foodCategory = await mongoose.connection.collection("foodCategory");
            const catData = await foodCategory.find({}).toArray();
            global.foodCategory = catData;
            
            //empty curle braces bcz we need all datas not particular one
            
        } catch (error)
        {
            console.log("error found; ",error);
        }
    };  


module.exports = mongoDB;

