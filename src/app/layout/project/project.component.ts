import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project..model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project!:Project
  @Output() onRemoveProject = new EventEmitter<number>()
  @Output() onEditProject = new EventEmitter<number>()
  @Output() onViewProject = new EventEmitter<number>()


  constructor(private route:Router){
    this.project = {
      firstname: '',
      lastname: '',
      birthdate: '',
      gender: '',
      project: '',
      company: '',
      jobExperience: 0,
      salary: 0,
      profile: '',
    };
  }

  ngOnInit(): void {
    console.log(this.project);
  }

  //delete project
  deleteProject(){
    this.onRemoveProject.emit(this.project.id)
  }

  //edit project
  editProject(){
    this.onEditProject.emit(this.project.id)
  }

  viewProject(){
    this.onViewProject.emit(this.project.id)
   this.route.navigate(['/empinfo'])
  }


}
