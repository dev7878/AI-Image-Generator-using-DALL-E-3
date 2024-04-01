// 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
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";
import { config, uploader } from "cloudinary";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 9000;
// mongoDb connection

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => console.log(e));

// Gallery model
const gallerySchema = new mongoose.Schema(
  {
    prompt: String,
    url: String,
    public_id: String,
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", gallerySchema);
// Open AI configuration

const openai = new OpenAI({
  apiKey: "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",
});
// configure Cloudinary

config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  url: process.env.CLOUDINARY_URL,
  secure: true,
});

//cors config

const corsOptions = {
  origin: ["http://localhost:5173"],
};
//middleware

app.use(express.json());
app.use(cors(corsOptions));

//routes

app.post("/generate-image", async (req, res) => {
  const { prompt } = req.body;

  try {
    const imageResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
    });

    // save image to cloudinary
    const image = await uploader.upload(imageResponse.data[0].url, {
      folder: "AI-Project-Images",
    });
    const imageCreated = await Gallery.create({
      prompt: imageResponse.data[0].revised_prompt,
      url: imageResponse.data[0].url,
      public_id: image.public_id,
    });

    // console.log(imageResponse.data.data[0].url);
    res.json(imageResponse.data[0].url);
    //   image_url = response.data.data[0].url;
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
});
// Listing images

app.get("/images", async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error fetching images" });
  }
});

// start server on express
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
