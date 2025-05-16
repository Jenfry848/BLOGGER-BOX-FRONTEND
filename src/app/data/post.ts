import { Category }from "./category";


export interface Post {
    id: string;
    title: string;
    content: string;
    createdDate: Date;
    category: Category;
}

// Type utilisé pour la création (ne contient pas de `id`)
export type PostCreateInput = Omit<Post, 'id'>;
 
// Optionnel : ajouter des propriétés temporaires côté client
export type PostCreateInputWithStatus = Omit<Post, 'id'> & { isActive: boolean };