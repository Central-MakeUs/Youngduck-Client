export interface IImageRequest {
  data?: string | null | undefined;
  mime: string;
  modificationDate?: string;
  path: string;
  size: number;
  width: number;
  height: number;
}
