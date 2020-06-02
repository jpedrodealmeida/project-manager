import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _publicService: PublicService) { }

  public postProject(project: object):Observable<any>{
    return this._publicService.postProject(project);
  }

  public getProjects():Observable<any>{
    return this._publicService.getProjects();
  }
}
