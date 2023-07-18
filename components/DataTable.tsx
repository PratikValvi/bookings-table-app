"use client"

import { TableContainer, Table, TableCaption, Thead, Tbody, Tr, Th, Td, Badge, Button, Text, Flex } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { useState } from 'react'

type DataTableProps = {
  headers: string[];
  rows: (string | JSX.Element)[][];
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
};

const DataTable: React.FC<DataTableProps> = ({ headers, rows, caption, pagination }) => {
  const [tableRows, setTableRows] = useState<(string | JSX.Element)[][]>(rows);
  const [sortConfig, setSortConfig] = useState<{ key: number | null; direction: string | null }>({
    key: null,
    direction: null
  });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handleSort = (columnIndex: number) => {
    const newSortConfig = { ...sortConfig };
    if (newSortConfig && newSortConfig.key === columnIndex) {
      newSortConfig.direction = newSortConfig.direction === 'asc' ? 'desc' : 'asc';
    } else {
      newSortConfig.key = columnIndex;
      newSortConfig.direction = 'asc';
    }
    setSortConfig(newSortConfig);

    const sortedRows = [...tableRows];
    sortedRows.sort((a, b) => {
      const valueA = a[columnIndex];
      const valueB = b[columnIndex];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        if (newSortConfig.direction === 'asc') {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      }
      return 0;
    });

    setTableRows(sortedRows);
  };

  const renderHeaders = () => {
    if (headers && headers.length > 0) {
      return headers.map((header, index) => {
        if (header === 'Select') {
          return (
            <Th key={index} className="table-header">
              {header}
            </Th>
          );
        }

        const isSortingColumn = sortConfig?.key === index;
        const isAscending = sortConfig?.direction === 'asc';
        const shouldShowArrow = isSortingColumn && sortConfig && !!(sortConfig.key && sortConfig.direction);

        return (
          <Th key={index} className="table-header" onClick={() => handleSort(index)}>
            <Flex alignItems="center">
              <Text>{header}</Text>
              {shouldShowArrow && (
                <ArrowUpIcon
                  opacity={1}
                  fontSize="16px"
                  color="black"
                  transform={isAscending ? 'rotate(180deg)' : 'none'}
                />
              )}
              {!shouldShowArrow && (
                <ArrowUpIcon
                  opacity={0}
                  fontSize="16px"
                  color="black"
                />
              )}
            </Flex>
          </Th>
        );
      });
    }
    return null;
  };

  const getBadge = (cell: string | JSX.Element) => {
    let colorSchemeProp = "green";
    if (cell == "Waiting") {
      colorSchemeProp = "yellow";
    } else if (cell == "Failed") {
      colorSchemeProp = "red";
    }

    return (
      <Badge variant="subtle" colorScheme={colorSchemeProp} rounded="lg" size="sm">
        {cell}
      </Badge>
    )
  }

  const renderRowCell = (row: (string | JSX.Element)[]) => {
    if (row && rows.length) {
      return (row.map((cell, cellIndex) => {
        if (cellIndex == 5) {
          return (
            <Td key={cellIndex}>
              {getBadge(cell)}
            </Td>
          )
        } else if (cellIndex == 6) {
          return (
            <Td key={cellIndex}><Button colorScheme="cyan" size="sm">Select</Button></Td>
          )
        } else {
          return (
            <Td key={cellIndex}>{cell}</Td>
          )
        }
      }))
    }
    return null;
  }

  const renderRows = () => {
    if (tableRows && tableRows.length > 0) {
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedRows = tableRows.slice(startIndex, endIndex);

      return paginatedRows.map((row, rowIndex) => (
        <Tr key={rowIndex}>
          {renderRowCell(row)}
        </Tr>
      ));
    }
    return null;
  };

  const pageCount = Math.ceil(tableRows.length / pageSize);
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        {caption && <TableCaption placement="top" color="black">{caption}</TableCaption>}
        <Thead>
          <Tr>
            {renderHeaders()}
          </Tr>
        </Thead>
        <Tbody>
          {renderRows()}
        </Tbody>
      </Table>
      {pagination && (
        <Flex justifyContent="center" mt={4} marginBottom={4}>
          {pageNumbers.map((pageNumber) => (
            <Button
              key={pageNumber}
              colorScheme={pageNumber === currentPage ? "cyan" : undefined}
              size="sm"
              onClick={() => changePage(pageNumber)}
              mr={2}
            >
              {pageNumber}
            </Button>
          ))}
        </Flex>
      )}
    </TableContainer>
  );
};

export default DataTable;
