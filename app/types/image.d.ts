export interface IImage {
  url: string
  title: string
  width: number
  height: number
  [key: string]: string | number | object
}