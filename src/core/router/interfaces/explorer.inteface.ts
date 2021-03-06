import { Controller } from '@nestjs/common/interfaces/index';
import { Metatype } from '@nestjs/common/interfaces/metatype.interface';

export interface RouterExplorer {
    explore(instance: Controller, metatype: Metatype<Controller>, moduleName: string);
}