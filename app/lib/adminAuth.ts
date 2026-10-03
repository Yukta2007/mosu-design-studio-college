import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "mosu_admin_session";

function createToken() {
  const secret = process.env.ADMIN_SECRET;

  if (!secret) {
    throw new Error("ADMIN_SECRET is missing");
  }

  const timestamp = Date.now().toString();

  const signature = crypto
    .createHmac("sha256", secret)
    .update(timestamp)
    .digest("hex");

  return `${timestamp}.${signature}`;
}

function verifyToken(token: string) {
  const secret = process.env.ADMIN_SECRET;

  if (!secret) return false;

  const [timestamp, signature] = token.split(".");

  if (!timestamp || !signature) return false;

  const age = Date.now() - Number(timestamp);

  // Session expires after 8 hours
  if (age > 8 * 60 * 60 * 1000) {
    return false;
  }

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(timestamp)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

export function createAdminSession() {
  return createToken();
}

export async function isAdminLoggedIn() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) return false;

  return verifyToken(token);
}

export { COOKIE_NAME };