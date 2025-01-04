import { error } from '@sveltejs/kit';
import authors from '../../../constant/authors.js';

export function load(data){
  const authorId = data.params.id;
  
  for(let author of authors){
    if(author.id == authorId){
      return {author};
    }
  }

  error(404, "Author not found");
}