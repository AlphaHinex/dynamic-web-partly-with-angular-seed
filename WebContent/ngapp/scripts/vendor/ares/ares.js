"use strict";angular.module("ares",["ares.grid"]);var deps=["ui.grid","ui.grid.pagination","ui.grid.pinning","ui.grid.moveColumns","ui.grid.resizeColumns"];angular.module("ares.grid",deps).directive("aresGrid",["i18nService",function(a){return{restrict:"E",compile:function(b){var c='<div ui-grid="gridOptions" ui-grid-pagination ui-grid-pinning ui-grid-move-columns ui-grid-resize-columns ></div>';return b.html(c),function(b){a.setCurrentLang("zh-cn");var c=b.gridOptions=b.gridOptions||{};c.paginationPageSizes=[25,50,75,100],c.paginationPageSize=25}}}}]);