import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    projectType: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    message: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry =
  mongoose.models.Enquiry ||
  mongoose.model("Enquiry", enquirySchema);

export async function POST(request: Request) {
  try {
    // Check MongoDB connection string
    if (!MONGODB_URI) {
      console.error("MONGODB_URI is missing from .env.local");

      return NextResponse.json(
        {
          success: false,
          error: "MongoDB connection string is missing.",
        },
        { status: 500 }
      );
    }

    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI);
    }

    // Get form data
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.projectType) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email and project type are required.",
        },
        { status: 400 }
      );
    }

    // Save enquiry
    const enquiry = await Enquiry.create({
      name: body.name,
      email: body.email,
      phone: body.phone || "",
      projectType: body.projectType,
      location: body.location || "",
      message: body.message || "",
    });

    console.log("NEW ENQUIRY SAVED:", enquiry._id);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        enquiryId: enquiry._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("ENQUIRY API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to save enquiry.",
      },
      { status: 500 }
    );
  }
}
