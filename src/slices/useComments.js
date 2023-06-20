import axios from "axios";
import { create } from "zustand";

const useComments = create((set) => ({
  comments: [],
  responseAPI: "",
  error: null,
  addComment: async (jwt, input) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/comments/44",
        { comment: input },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          withCredentials: true,
        }
      );
      set({ responseAPI: await res.data.message });
    } catch (error) {
      set({ error });
    }
  },
  fetchComments: async (jwt) => {
    try {
      const res = await axios.get("http://localhost:4000/comments/44", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      });

      set({ comments: await res.data.data });
    } catch (error) {
      set({ error });
    }
  },
}));

export default useComments;
