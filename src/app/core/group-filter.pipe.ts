import { Pipe, PipeTransform } from '@angular/core';
import { GroupModel } from '../models/groupModel';
import { TeamModel } from '../models/teamModel';

@Pipe({
  name: 'groupFilter'
})
export class GroupFilterPipe implements PipeTransform {

  transform(teams: TeamModel[], filter: GroupModel): any {
    if (!teams || !filter) {
      return teams;
  }
  
  return teams.filter(t => t.group?.id == filter.id);
  }

}
