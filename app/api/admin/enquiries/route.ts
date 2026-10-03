import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { isAdminLoggedIn } from "@/app/lib/adminAuth";

const MONGODB_URI = process.env.MONGODB_URI;

const enquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    projectType: String,
    location: String,
    message: String,
  },
  { timestamps: true }
);

const Enquiry =
  mongoose.models.Enquiry ||
  mongoose.model("Enquiry", enquirySchema);

export async function GET() {
  try {
    // Check admin login
    const loggedIn = await isAdminLoggedIn();

    if (!loggedIn) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    // Check MongoDB connection
    if (!MONGODB_URI) {
      return NextResponse.json(
        {
          success: false,
          error: "MONGODB_URI is missing",
        },
        { status: 500 }
      );
    }

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI);
    }

    const enquiries = await Enquiry.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      enquiries,
    });
  } catch (error) {
    console.error("ADMIN ENQUIRIES ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch enquiries",
      },
      { status: 500 }
    );
  }
}