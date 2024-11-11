export type IFilter = {
  id: string;
  name: string;
  image_url: string;
};

export interface IFiltersList {
  filters: IFilter[];
}
