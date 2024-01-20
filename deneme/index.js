import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = 3100;
app.use(express.json());
app.use(cors());

const denemeSchema = new Schema({
  title: String,
  price: Number,
});

const DenemeModel = mongoose.model("Deneme", denemeSchema);

app.get("/", async (req, res) => {
  try {
    const deneme = await DenemeModel.find({});
    res.send(deneme);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deneme = await DenemeModel.findById(id);
    res.send(deneme);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { title, price } = req.body;
    const Newdeneme = new DenemeModel({ title, price });
    await Newdeneme.save();
    res.send("added!");
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { title, price } = req.body;
    const { id } = req.params;
    const deneme = await DenemeModel.findByIdAndUpdate(id, { title, price });
    res.send(deneme);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deneme = await DenemeModel.findByIdAndDelete(id);
        res.send(deneme);
      } catch (error) {
        res.send(error.message);
      }
    });

mongoose
  .connect("mongodb+srv://Zumrud03:Durmuz2003@zumrud.qilshcl.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
