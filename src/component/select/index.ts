/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MdIconModule, MdInputModule} from '@angular/material';
import { DejaChildValidatorModule } from '../../common/core/validation/index';
import { DejaBackdropModule } from '../backdrop/index';
import { DejaChipsModule } from '../chips/index';
import { DejaDropDownModule } from '../dropdown/index';
import { DejaItemComponent } from './../../common/core/item-list/item.component';
import { DejaSelectComponent } from './select.component';

@NgModule({
    declarations: [
        DejaSelectComponent,
        DejaItemComponent,
    ],
    exports: [
        DejaSelectComponent,
        DejaItemComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        MdIconModule,
        MdInputModule,
        DejaChildValidatorModule,
        DejaChipsModule,
        DejaDropDownModule,
        DejaBackdropModule,
    ],
})
export class DejaSelectModule {}

export * from './select.component';
