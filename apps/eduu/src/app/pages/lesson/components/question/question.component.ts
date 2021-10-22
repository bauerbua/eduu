import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  showAnswers: boolean = false;
  question: string = 'Lorem ipsum dolor ullam voluptates voluptatum. fugit illo laudantium molestiae nihil odio officiis placeat quod rerum, sequi ullam voluptates voluptatum?'
  answers: {text: string, rating: number}[] = [
    {
      text: 'siugigsifakuzfs kuzasvdfuzishd fkuzfg sakufzgaf asdizfgasdfkuzasfghawrnkfzjdghasuzfa sf. izagdi!',
      rating: 3
    },
    {
      text: 'siugigsifakuzfs kuzasvdfuzishd fkuzfg sakufzgaf asdizfgasdfkuzasfghawrnkfzjdghasuzfa sf. izagdi!',
      rating: 1,
    },
    {
      text: 'siugigsifakuzfs kuzasvdfuzishd fkuzfg sakufzgaf asdizfgasdfkuzasfghawrnkfzjdghasuzfa sf. izagdi!',
      rating: -1
    },
  ]

}
