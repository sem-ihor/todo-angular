import {Pipe, PipeTransform} from '@angular/core';
import {TodoItem} from '../task.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: TodoItem[], search: string = ''): TodoItem[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter(post => {
      return post.content.toLowerCase().includes(search.toLowerCase());
    });
  }

}
