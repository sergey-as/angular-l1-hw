import {Component, Input} from '@angular/core';
import {Post} from "../models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {    // TODO якщо OnInit не використовується, то можна не імплементувати
  @Input()
  post: Post;
}
