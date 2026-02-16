// Make sure this points to your backend
export const BASE_API_URL = "http://localhost:8080";

// Add a test function to verify connection
export const testApiConnection = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/`);
    const data = await response.json();
    console.log("API Connection Test:", data);
    return data;
  } catch (error) {
    console.error("API Connection Failed:", error);
    return null;
  }
};
