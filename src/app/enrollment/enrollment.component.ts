import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent {
  submitForm() {
    // Retrieve values directly from DOM elements
    const assignment1Marks = +(document.getElementById('assignment1') as HTMLInputElement).value;
    const assignment2Marks = +(document.getElementById('assignment2') as HTMLInputElement).value;
    const assignment3Marks = +(document.getElementById('assignment3') as HTMLInputElement).value;
    const midtermMarks = +(document.getElementById('midMarks') as HTMLInputElement).value;
    const finalMarks = +(document.getElementById('finalMarks') as HTMLInputElement).value;
    const projectMarks = +(document.getElementById('projectMarks') as HTMLInputElement).value;
    const progress = (document.getElementById('progress') as HTMLElement)
    
    // Log values to console (you can process them further as needed)
    console.log('Assignment 1 Marks:', assignment1Marks);
    console.log('Assignment 2 Marks:', assignment2Marks);
    console.log('Midterm Marks:', midtermMarks);
    console.log('Final Exam Marks:', finalMarks);
    console.log('Project Marks:', projectMarks);
    progress.style.display="block"
    const result = (assignment1Marks*0.05)+(assignment2Marks*0.05)+(assignment3Marks*0.05)+(midtermMarks*0.15)+(finalMarks*0.50)+(projectMarks*0.20)

    // progress.innerHTML=`<p class="font-semibold" >Result:${result} Grade:${grade} </p>`

    const formData = {
      assignment1: assignment1Marks,
      assignment2: assignment2Marks,
      assignment3: assignment3Marks,
      midterm: midtermMarks,
      final: finalMarks,
      project: projectMarks
    };
    console.log('Submitting form data:', formData);
  }
}
