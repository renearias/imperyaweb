import {EntityInterface} from './entity-interface'
import {dateToApiDate} from '../components/helpers/dateTimeFunctions';
import {snakeToCamel} from '../components/helpers/stringFunctions';
declare var moment: any;

export class Entity implements EntityInterface {
    public id: number|string;
    constructor( r?:any )
    {
      if (typeof(r) != 'undefined')
      {
        var i=0;
        for (i=0; i<Object.keys(r).length;i++)
        {
            this[snakeToCamel(Object.keys(r)[i])] = r[Object.keys(r)[i]];
        }
      }
   }
    public prepareToSend(): EntityInterface
    {
      let entityPrepared: EntityInterface = new Entity(this);
      //productoPrepared.fechaAlta=dateToApiDate(this.fechaAlta);
      delete entityPrepared['id'];
      return entityPrepared;
    }
}
