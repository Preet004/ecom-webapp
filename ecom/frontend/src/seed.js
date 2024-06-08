import mongoose from 'mongoose';
import Product from './models/productModel.js';
import User from './models/userModel.js';

const sampleProducts = [ /* Add sample products here */ ];
const sampleUsers = [ /* Add sample users here */ ];

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  await Product.deleteMany({});
  await User.deleteMany({});
  await Product.insertMany(sampleProducts);
  await User.insertMany(sampleUsers);
  mongoose.disconnect();
};

seedData();
