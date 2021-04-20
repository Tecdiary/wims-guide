### Inventory Movement

Warehouses take stock in as checkins while sends out as checkouts.

## Checkins

Checkins are the incoming inventory/stock to increase the items' quantity/weight. Checkin can be added for a single warehouse with multiple items and has following fields

1. Date
2. Reference
3. Contact
4. Warehouse
5. Items with quantity/weight
6. Attachments
7. Details
8. Draft (if the checkin is still draft)

Draft checkin will not be added to the inventory but will be kept as record. You can edit them any item to finalize and once you unselect the draft and submit the checkin, it will sync the items' inventory/stock.

Checkin listing page has the checkin data with filter/search option with view, edit and delete action buttons. Filters are remembered on page load as same as other listing tables.

## Checkouts

Checkouts are the outgoing inventory/stock to decrease the items' quantity/weight. Checkout can be added for a single warehouse with multiple items and has following fields

1. Date
2. Reference
3. Contact
4. Warehouse
5. Items with quantity/weight
6. Attachments
7. Details
8. Draft (if the checkout is still draft)

Draft checkout will not be added to the inventory but will be kept as record. You can edit them any item to finalize and once you unselect the draft and submit the checkout, it will sync the items' inventory/stock.

Checkout listing page has the checkout data with filter/search option with view, edit and delete action buttons. Filters are remembered on page load as same as other listing tables.

## Transfers

Transfers are the movement of inventory/stock from one warehouse to another. Transfer has following fields

1. Date
2. Reference
3. From Warehouse
4. To Warehouse
5. Items with quantity/weight
6. Attachments
7. Details
8. Draft (if the transfer is still draft)

Draft transfer will not have any effect on inventory but are kept as record. You can edit transfer any item to finalize and once you unselect the draft, it will sync the items' inventory/stock in both from and to warehouse, increase in to warehouse while decreasing out from warehouse.

Transfer listing page has the checkout data with filter/search option with view, edit and delete action buttons. Filters are remembered on page load as same as other listing tables.

## Adjustments

You can adjust the item inventory for damage or any other reason. You have the adjustment type for addition (to increase the stock), damage & subtraction (to decrease the stock). Adjustment has following fields

1. Date
2. Reference
3. Type
4. Warehouse
5. Items with quantity/weight
6. Attachments
7. Details
8. Draft (if the transfer is still draft)

Draft adjustment will not have any effect on inventory as others. You can edit adjustment and once you unselect the draft, it will sync the items' inventory/stock as per type addition will increase the stock while other will decrease.

Adjustment listing page has the data with filter/search option with view, edit and delete action buttons. Filters are remembered on page load as same as other listing tables.
