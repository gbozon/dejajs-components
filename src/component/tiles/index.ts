/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdProgressSpinnerModule } from '@angular/material';
import { CloningService } from '../../common/core/cloning/cloning.service';
import { DejaEditableModule } from '../content-editable/index';
import { DejaMouseDragDropModule } from './../mouse-dragdrop/index';
import { DejaMouseDragDropService } from './../mouse-dragdrop/mouse-dragdrop.service';
import { DejaTileGroupComponent } from './tile-group.component';
import { DejaTilePositionDirective } from './tile-position.directive';
import { DejaTileComponent } from './tile.component';
import { DejaTilesComponent } from './tiles.component';

@NgModule({
    declarations: [DejaTileComponent, DejaTilesComponent, DejaTileGroupComponent, DejaTilePositionDirective],
    exports: [DejaTileComponent, DejaTilesComponent, DejaTileGroupComponent],
    imports: [
        CommonModule,
        FormsModule,
        MdProgressSpinnerModule,
        DejaMouseDragDropModule,
        DejaEditableModule,
    ],
    providers: [
        CloningService,
        DejaMouseDragDropService,
    ]
})
export class DejaTilesModule { }

export * from './tile-group.component';
export * from './tile.interface';
export * from './tile.class';
export * from './tile.component';
export * from './tile-position.directive';
export * from './tiles.event';
export * from './tiles-layout.provider';
export * from './tiles.component';
