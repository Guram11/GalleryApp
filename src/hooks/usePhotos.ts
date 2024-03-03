import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function usePhotos(page: number) {
  const fetchPhotos = async () => {
    const url = `https://api.unsplash.com/photos?client_id=${
      import.meta.env.VITE_CLIENT_ID
    }`;

    const res = await axios.get(url, {
      params: { page, per_page: 20, order_by: "popular" },
    });
    return res.data;
  };

  const { isError, isLoading, data } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
  });

  return { isError, isLoading, data };
}

export function GetPhotosById(selectedId: string) {
  const fetchPhotos = async (id: string) => {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${
      import.meta.env.VITE_CLIENT_ID
    }`;

    const res = await axios.get(url);
    return res.data;
  };

  const { isError, isLoading, data } = useQuery({
    queryKey: ["photos", selectedId],
    queryFn: () => fetchPhotos(selectedId),
  });

  return { isError, isLoading, data };
}

export function getPostsPaginated(page: number, queryValue: string) {
  return axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=${
        import.meta.env.VITE_CLIENT_ID
      }`,
      {
        params: { page: page, query: queryValue },
      }
    )
    .then((res) => {
      const hasNext = page * 2 <= parseInt(res.data.total);
      return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page === 1 ? undefined : page > 1 ? page - 1 : undefined,
        posts: res.data,
      };
    });
}
