import {Producto} from '../../productos/producto';

export class InstanceLoader {
    public static getInstance<T>(context: Object, name: string, ...args: any[]) : T {
        var instance = Object.create(context[name].prototype);
        instance.constructor.apply(instance, args);
        return <T> instance;
    }

    public static factory(className: string, ctor?: any) { 

        var ClassDictionary = {
            "Date": Date,
            "Number": Number,
            "Producto": Producto
        };

        return new ClassDictionary[className](ctor);
    }
}