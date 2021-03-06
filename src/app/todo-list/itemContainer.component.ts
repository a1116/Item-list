import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "itemContainer",
  template: `
    <item
      *ngFor="let item of itemList; let i = index"
      [text]="item"
      index="i"
      class="item"
    >
    </item>
  `,
  styles: [
    `
      .item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-left: solid 3px rgb(255, 187, 0);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 0 2px 5px #f5f5f5;
        padding: 0.5rem;
        margin: 1rem 2px;
        background-color: #f5f5f5;
        font-size: 1.1rem;
      }

      .item-text {
        color: #0009;
      }

      .item-close-btn {
        align-self: center;
        border-left: solid 0.1px #ddd;
        font-size: small;
        padding-left: 7px;
      }
    `
  ]
})
export class ItemContainerComponent {
  @Input() itemList: any;
  @Output() onCloseBtn = new EventEmitter();
}
