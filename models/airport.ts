import { Schema, model, models } from "mongoose";

const airportSchema = new Schema({
  id: {type: Number, unique: true},
  name: {type: String},
  country: {type: String},
});

const Airport = models.Airport || model('Airport', airportSchema);

export default Airport;
