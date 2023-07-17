"use client"

import { TableContainer, Table, TableCaption, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

type DataTableProps = {
  headers: string[];
  rows: (string | JSX.Element)[][];
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
};

const DataTable: React.FC<DataTableProps> = ({ headers, rows, caption }) => {

  const renderHeaders = () => {
    if (headers && headers.length > 0) {
      return (
        headers.map((header, index) => (
          <Th key={index}>
            {header}
          </Th>
        ))
      )
    }
    return null;
  };

  const renderRows = () => {
    if (rows && rows.length > 0) {
      return (
        rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={cellIndex}>{cell}</Td>
            ))}
          </Tr>
        ))
      )
    }
    return null;
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
    </TableContainer>
  );
};

export default DataTable;
