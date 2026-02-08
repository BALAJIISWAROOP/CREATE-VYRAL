
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}