const functions = require("firebase-functions");
const admin = require("firebase-admin");
const tf = require("@tensorflow/tfjs-node");
admin.initializeApp();

exports.predictChurn = functions.https.onRequest(async (req, res) => {
  const input = req.body;  // Receive input data for prediction
  
  // Load your pre-trained model (make sure to upload your model to Firebase Storage or Firebase Functions environment)
  const model = await tf.loadLayersModel('file://path_to_your_model/model.json');
  
  // Prepare the input data and predict
  const prediction = model.predict(tf.tensor([input]));
  res.send({ prediction: prediction.arraySync() });
});
