import { ElementRef } from '@angular/core';
import { DejaClipboardService } from '../../common/core/clipboard/clipboard.service';
import { IDejaDragEvent } from './index';
export declare class DejaDroppableDirective {
    private clipboardService;
    allEvents: boolean | string;
    private droppable;
    private draginfokey;
    private objectKey;
    private droppedKey;
    private elementKey;
    private lastTarget;
    private lastAccept;
    private _allEvents;
    private _context;
    context: IDejaDropContext;
    constructor(elementRef: ElementRef, clipboardService: DejaClipboardService);
}
export interface IDejaDropEvent extends IDejaDragEvent {
    itsMe: boolean;
}
export interface IDejaDropContext {
    dragentercallback: (event: CustomEvent) => void;
    dropcallback: (event: IDejaDropEvent) => void;
    dragovercallback: (event: IDejaDropEvent) => void;
    dragleavecallback: (event: CustomEvent) => void;
}