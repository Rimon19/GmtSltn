import { Injectable } from '@angular/core';
import { of } from 'rxjs';
const ALL_SKILLS = [
	{name: 'Java', displayName: 'Java'},
	{name: 'Angular', displayName: 'Angular'},
	{name: 'Dot Net', displayName: 'Dot Net'}
 ];
@Injectable({
  providedIn: 'root'
})
export class TeamManagementServiceService {

  getSkills() {
		return of(ALL_SKILLS);
	}
}
