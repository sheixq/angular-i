import { Component } from '@angular/core'

// ng container

interface WeekGrade {
  id: number
  gradeItem: number
}

interface Lesson {
  id: number
  title: string
  weekGrades: WeekGrade[]
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  isLoading = true
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 5,
        },
        {
          id: 1,
          gradeItem: 2,
        },
        {
          id: 2,
          gradeItem: 3,
        },
      ],
    },
    {
      id: 1,
      title: 'Physics',
      weekGrades: [
        {
          id: 0,
          gradeItem: 3,
        },
        {
          id: 1,
          gradeItem: 4,
        },
        {
          id: 2,
          gradeItem: 1,
        },
      ],
    },
  ]

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  getGrade(grade: string) {}
}
