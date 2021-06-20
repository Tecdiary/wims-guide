import{o as e,c as t,a as i}from"./app.4e964574.js";const a='{"title":"Items, Categories & Units","description":"","frontmatter":{},"headers":[{"level":3,"title":"Items, Categories & Units","slug":"items-categories-units"},{"level":2,"title":"Items","slug":"items"},{"level":2,"title":"Categories","slug":"categories"},{"level":2,"title":"Units","slug":"units"}],"relativePath":"guide/items.md","lastUpdated":1618938612663}',s={},l=i('<h3 id="items-categories-units"><a class="header-anchor" href="#items-categories-units" aria-hidden="true">#</a> Items, Categories &amp; Units</h3><p>Items are the main products that you want to track. These can be categorize and have assigned units of measurement.</p><h2 id="items"><a class="header-anchor" href="#items" aria-hidden="true">#</a> Items</h2><p>Items have the following fields:</p><ol><li>Name</li><li>Code</li><li>Barcode Symbology</li><li>SKU</li><li>Category</li><li>Subcategory</li><li>Unit</li><li>Rack Location</li><li>Details</li><li>Track Weight</li><li>Track Quantity</li><li>Alert Quantity</li><li>Track Variants</li><li>Variants</li></ol><p>System will set item stock to 0 for each warehouse and generate all variations while adding the item. You can add check in after items to set the initial inventory/stock.</p><p>Items page list all the data for the items including the warehouse stock. Table can be searched. Actions column has menu links to view the stock trail/movement, view full page item details with all variations stock, edit and delete item.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Table remembers the filters on page load. You will need to rest to forget filters to load normal listing.</p></div><p><strong>Item Trail</strong> is to track the item movement on the period of time. You can select the start and end date to check the stock at any period of time.</p><div class="tip custom-block"><p class="custom-block-title">Import from Excel</p><p>You can import the bulk items with excel file.</p></div><h2 id="categories"><a class="header-anchor" href="#categories" aria-hidden="true">#</a> Categories</h2><p>Categories have been added so that you can manage the item easily. You can assign category &amp; subcategory to items.</p><p>Categories have the following fields:</p><ol><li>Name</li><li>Code</li><li>Parent Category (only required if you want to add subcategory)</li></ol><p>Categories listing table is similar to items with filter/search options. Filters are remembered on page load as same as other listing tables.</p><div class="tip custom-block"><p class="custom-block-title">Import from Excel</p><p>You can import the bulk categories with excel file.</p></div><h2 id="units"><a class="header-anchor" href="#units" aria-hidden="true">#</a> Units</h2><p>Units (units of measurement) have been added so that you can check in/out quantity in different units.</p><p>Categories have the following fields:</p><ol><li>Name</li><li>Code</li><li>Base unit (optional to assign conversion)</li><li>Operator (for conversion formula)</li><li>Operation Value (for conversion formula)</li></ol><p>Units listing table is similar to categories with filter/search options. Filters are remembered on page load as same as other listing tables.</p><div class="tip custom-block"><p class="custom-block-title">Import from Excel</p><p>You can import the bulk units with excel file.</p></div>',22);s.render=function(i,a,s,o,r,n){return e(),t("div",null,[l])};export default s;export{a as __pageData};
