import axios from "axios";

const keyUnsplash = "O-LOnRWHqyvxv1velTIsZ80G62iIX12mrAE3fPe_Osw";

export const fetchArticles = async (query) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${keyUnsplash}`
  );
  return response.data.results;
};
