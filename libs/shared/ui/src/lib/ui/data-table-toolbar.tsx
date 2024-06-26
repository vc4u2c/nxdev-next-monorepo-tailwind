'use client';
import { XIcon } from 'lucide-react';
import { RiFileExcel2Line } from 'react-icons/ri';
import { Table } from '@tanstack/react-table';
import { Button } from './button';
import { Input } from './input';
import { DataTableViewOptions } from './data-table-view-options';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { exportToExcel } from '../export-to-excel';
import { Toaster } from './toaster';

export interface Filter {
  primaryFilterAccessorKey: string;
  primaryFilterPlaceholder: string;
  primaryFacetedFilterAccessorKey: string;
  primaryFacetedFilterTitle: string;
  primaryFacetedFilterOptions: FacetedFilterOption[];
}

export interface FacetedFilterOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filter: Filter;
  data: TData[];
}

export function DataTableToolbar<TData>({
  table,
  filter,
  data,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between pb-2">
      <div className="flex flex-1 items-center justify-start space-x-2">
        <Input
          placeholder={filter.primaryFilterPlaceholder}
          value={
            (table
              .getColumn(filter.primaryFilterAccessorKey)
              ?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table
              .getColumn(filter.primaryFilterAccessorKey)
              ?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn(filter.primaryFacetedFilterAccessorKey) && (
          <DataTableFacetedFilter
            column={table.getColumn(filter.primaryFacetedFilterAccessorKey)}
            title={filter.primaryFacetedFilterTitle}
            options={filter.primaryFacetedFilterOptions}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <XIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex flex-1 items-center justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex max-sm:hidden"
          onClick={() => exportToExcel(data)}
        >
          <RiFileExcel2Line className="mr-2 h-4 w-4" />
          Export
        </Button>
        <DataTableViewOptions table={table} />
        <Toaster />
      </div>
    </div>
  );
}
