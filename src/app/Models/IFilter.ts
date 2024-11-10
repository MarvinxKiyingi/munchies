export type IFilter = {
  id: string;
  name: string;
  image_url: string;
};

export interface IFiltersResponse {
  filters: IFilter[];
}
