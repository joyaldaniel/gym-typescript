export enum SelectedPage{
    Home='home',
    Benfits='benfits',
    OurClasses='ourClasses',
    ContactUs='contactus'
  }
  export interface BenfitsType  {
    id?:number,
    icon:JSX.Element,
    title:string,
    description:string,
    
  }
  export interface OurClassListType{
    id?:number,
    name:string,
    description?:string,
    image:any
    key?: number
  }