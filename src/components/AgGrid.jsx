import React, { useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule, PaginationModule } from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community';
import { provideGlobalGridOptions } from 'ag-grid-community';

// Mark all grids as using legacy themes
provideGlobalGridOptions({
  theme: 'legacy'
});

ModuleRegistry.registerModules([ClientSideRowModelModule, PaginationModule]);
import 'ag-grid-community/styles/ag-grid.css'; // Core styles
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Alpine theme styles

const AgGrid = ({ columnDefs, rowData, gridOptions, pagination, className, autoSize, ...rest }) => {
  const gridRef = useRef();

  useEffect(() => {
    if (autoSize && gridRef.current?.api) {
      // Auto-size columns when grid is ready
      autoSizeColumns();
    }
  }, [autoSize, rowData]);

  const autoSizeColumns = () => {
    const allColumnIds = [];
    gridRef.current.columnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.getId());
    });
    gridRef.current.columnApi.autoSizeColumns(allColumnIds);
  };

  const onGridReady = (params) => {
    if (autoSize) autoSizeColumns();
    if (gridOptions?.onGridReady) gridOptions.onGridReady(params);
  };

  return (
    <div className={`ag-theme-alpine ${className || ''}`} style={{ height: '100%', width: '100%' }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowData={rowData}
        {...gridOptions}
        pagination={pagination}
        paginationPageSize={10}
        onGridReady={onGridReady}
        {...rest}
      />
    </div>
  );
};

export default AgGrid;
