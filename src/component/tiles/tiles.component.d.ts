import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Rect } from '../../common/core/graphics';
import { IDejaMouseDroppableContext } from '../mouse-dragdrop/index';
import { DejaTile, IDejaTile, IDejaTilesAddEvent, IDejaTilesEvent, IDejaTilesModelEvent, IDejaTilesRefreshParams, IDejaTilesRemoveEvent } from './index';
import { DejaTilesLayoutProvider } from './tiles-layout.provider';
export declare class DejaTilesComponent implements AfterViewInit, OnDestroy {
    private layoutProvider;
    selectionChanged: EventEmitter<IDejaTilesEvent>;
    layoutChanged: EventEmitter<IDejaTilesEvent>;
    contentAdding: EventEmitter<IDejaTilesAddEvent>;
    contentRemoving: EventEmitter<IDejaTilesRemoveEvent>;
    modelChanged: EventEmitter<IDejaTilesModelEvent>;
    contentCopied: EventEmitter<IDejaTilesEvent>;
    protected tileTemplate: any;
    private _models;
    private delete$sub;
    private copy$sub;
    private cut$sub;
    private paste$sub;
    private keyup$;
    private resize$sub;
    private tiles$;
    private tilesContainer;
    constructor(el: ElementRef, layoutProvider: DejaTilesLayoutProvider);
    tileminwidth: string;
    tilemaxwidth: string;
    tileminheight: string;
    tilemaxheight: string;
    maxwidth: string;
    designMode: boolean | string;
    models: IDejaTile[];
    canDelete: boolean;
    canCopy: boolean;
    canCut: boolean;
    canPaste: boolean;
    selectedTiles: string[];
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    copySelection(): DejaTile[];
    cutSelection(): DejaTile[];
    deleteSelection(): DejaTile[];
    paste(): DejaTile[];
    ensureVisible(id: string): void;
    expandTile(tile: IDejaTile, pixelheight: number): void;
    cancelExpand(): void;
    refresh(params?: IDejaTilesRefreshParams): void;
    addTiles(tiles: IDejaTile[]): void;
    removeTiles(tileIds: string[]): void;
    addGroup(title?: string, bounds?: Rect): IDejaTile;
    getFreePlace(pageX?: number, pageY?: number, width?: number, height?: number): Rect;
    moveTile(id: string, bounds: Rect): void;
    protected getDropContext(_dropArea: HTMLElement): IDejaMouseDroppableContext;
    protected onTileClosed(tile: DejaTile): void;
    protected onTileModelChanged(tile: DejaTile): void;
    protected onMouseDown(e: DragEvent): boolean;
}