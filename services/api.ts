import { ContactFormData } from '../types';

/**
 * Simulates sending data to a MySQL database backend.
 * In a real Next.js app, this would be an API Route (e.g., /api/contact)
 * that connects to MySQL using a library like `mysql2` or an ORM like `Prisma`.
 */
export const submitContactForm = async (data: ContactFormData): Promise<boolean> => {
  console.log("Preparing to send data to MySQL database:", data);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate random success/failure (mostly success for demo)
  const isSuccess = Math.random() > 0.1;

  if (isSuccess) {
    console.log("Data successfully saved to Database.");
    return true;
  } else {
    console.error("Failed to connect to Database.");
    throw new Error("Database connection failed");
  }
};