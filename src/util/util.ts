import { PhotoSingle } from "../interfaces/interfaces";

export default function getColumns(data: PhotoSingle[]) {
  function getEveryNth(arr: PhotoSingle[], nth: number, Index: number) {
    const result = [];

    for (let index = Index; index < arr.length; index += nth) {
      result.push(arr[index]);
    }

    return result;
  }

  const col1 = getEveryNth(data, 3, 0);
  const col2 = getEveryNth(data, 3, 1);
  const col3 = getEveryNth(data, 3, 2);

  return { col1, col2, col3 };
}
