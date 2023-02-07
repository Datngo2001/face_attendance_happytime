import React from 'react'
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import "./styles.scss";
import NoRowsOverlayCustom from 'components/NoRowsOverlayCustom';
import LoadingCustom from 'components/LoadingCustom';

const DataGridCustom: React.FC<DataGridProps & React.RefAttributes<HTMLDivElement>> = (props) => {
  return (
    <DataGrid
      autoHeight
      hideFooter={true}
      disableColumnMenu
      components={{
        Pagination: null,
        NoRowsOverlay: NoRowsOverlayCustom,
        LoadingOverlay: LoadingCustom,
      }}
      {...props}
    ></DataGrid>
  )
}

export default DataGridCustom