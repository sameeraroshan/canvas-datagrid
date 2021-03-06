/*jslint browser: true */
require(['../dist/canvas-datagrid.debug.js'], function (dataGrid) {
    'use strict';
    var grid = dataGrid({
        parentNode: document.getElementById('grid')
    });
    grid.addEventListener('contextmenu', function (e) {
        e.items.push({
            title: 'View page source',
            click: function () { window.open('https://github.com/TonyGermaneri/canvas-datagrid/blob/master/tutorials/amdDemo.html', 'src'); }
        });
        e.items.push({
            title: 'View JS module',
            click: function () { window.open('https://github.com/TonyGermaneri/canvas-datagrid/blob/master/tutorials/amdDemo.js', 'src'); }
        });
        e.items.push({
            title: 'Go to main canvas-datagrid GitHub page',
            click: function () { window.open('https://github.com/TonyGermaneri/canvas-datagrid', 'src'); }
        });
    });
    grid.data = [{a: 0, b: 1, c: 2}];
});
