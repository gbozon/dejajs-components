/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { NgModule } from '@angular/core';
import { ValidationOnBlurDirective } from './index';

@NgModule({
    declarations: [ValidationOnBlurDirective],
    exports: [ValidationOnBlurDirective],
})
export class DejaFormModule { }
