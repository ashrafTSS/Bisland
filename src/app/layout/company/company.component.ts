import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Project } from 'src/app/model/project..model';
import { ProjectService } from 'src/app/service/project.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit,AfterViewInit {

  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addEmployeeButton') addEmployeeButton :any

  projectFrom: FormGroup;

  projects: Project[] = [];
  projectsToDisplay: Project[] = [];
  projectsOptions = [
    'glt',
    'frest water boats',
    'canooah',
    'nashme',
    'learning/others',
  ];

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService
  ) {
    this.projectFrom = fb.group({});
    this.projects = [];
    this.projectsToDisplay = this.projects;
  }

  ngOnInit(): void {
    this.projectFrom = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      project: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    });

    this.projectService.getProject().subscribe((res) => {
      for (let pro of res) {
        this.projects.unshift(pro);
      }
      this.projectsToDisplay = this.projects;
    });
  }

  ngAfterViewInit(): void {
    //this.buttontemp.nativeElement.click();
  }

  addProject() {
    let projects: Project = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      birthdate: this.BirthDay.value,
      gender: this.Gender.value,
      project: this.projectsOptions[parseInt(this.Project.value)],
      company: this.Company.value,
      jobExperience: this.JobExperience.value,
      salary: this.Salary.value,
      profile: this.fileInput.nativeElement.files[0]?.name,
    };
    this.projectService.postProject(projects).subscribe((res) => {
      this.projects.unshift(res);
      this.clearForm();
    });
  }

  clearForm() {
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDay.setValue('');
    this.Gender.setValue('');
    this.Project.setValue('');
    this.Company.setValue('');
    this.JobExperience.setValue('');
    this.Salary.setValue('');
    this.fileInput.nativeElement.value = '';
  }

  public get FirstName(): FormControl {
    return this.projectFrom.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.projectFrom.get('lastname') as FormControl;
  }
  public get BirthDay(): FormControl {
    return this.projectFrom.get('birthday') as FormControl;
  }
  public get Gender(): FormControl {
    return this.projectFrom.get('gender') as FormControl;
  }
  public get Project(): FormControl {
    return this.projectFrom.get('project') as FormControl;
  }
  public get Company(): FormControl {
    return this.projectFrom.get('company') as FormControl;
  }
  public get JobExperience(): FormControl {
    return this.projectFrom.get('jobExperience') as FormControl;
  }
  public get Salary(): FormControl {
    return this.projectFrom.get('salary') as FormControl;
  }

  //delete project
  removeProject(event :any){
    this.projects.forEach((val,index)=>{
      if(val.id === parseInt(event)){
        this.projectService.deleteProject(event).subscribe((res)=>{
          this.projects.splice(index,1)
        })
      }
    })
  }

  setForm(pro: Project) {
    this.FirstName.setValue(pro.firstname);
    this.LastName.setValue(pro.lastname);
    this.BirthDay.setValue(pro.birthdate);
    this.Gender.setValue(pro.gender);

    let projectIndex = 0;
    this.projectsOptions.forEach((val, index) => {
      if (val === pro.project) projectIndex = index;
    });
    this.Project.setValue(projectIndex);

    this.Company.setValue(pro.company);
    this.JobExperience.setValue(pro.jobExperience);
    this.Salary.setValue(pro.salary);
    this.fileInput.nativeElement.value = '';
  }

  //edit project
  editProject(event:any){
    this.projects.forEach((val, ind) => {
      if (val.id === event) {
        this.setForm(val);
      }
    });
    this.removeProject(event);
    this.addEmployeeButton.nativeElement.click();
  }

  //search project
  searchProject(event: any) {
    let filteredProject: Project[] = [];

    if (event === '') {
      this.projectsToDisplay = this.projects;
    } else {
      filteredProject = this.projects.filter((val, index) => {
        let targetKey = val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.projectsToDisplay = filteredProject;
    }
  }

}




