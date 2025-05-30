const mongoose = require("mongoose");

const expanceSchema = mongoose.Schema(
  {
    expanceName: {
      type: String,
      required: [true, "Expance Name is Required"],
      minLength: 3,
      trim: true,
    },
    expanceAmount: {
      type: Number,
      required: [true, "Expance Amount is Required"],
      minLength: 3,
      trim: true,
    },
    expanceImage: {
      type: String,
    },
    expanceDate: {
      type: Date,
      default: Date.now,
    },
    expanceCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExpanceCategoryModel",
    },
    // addedBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "employeeModel",
    // },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'addedByModel',  // Use dynamic reference here
    },
    addedByModel: {
      type: String,
      required: true,
      enum: ['employeeModel', 'deletedEmployeeModel'], // restrict possible models
      default: 'employeeModel', // Default to employeeModel
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("expanceModel", expanceSchema);
