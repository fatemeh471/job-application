import { POSTS } from "../constants/endpoints";
import { DataType } from "./api.type";

export const createPost = async (data: DataType) => {
  try {
    const response = await fetch(POSTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};
