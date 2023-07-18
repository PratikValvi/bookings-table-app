"use client"

import { TableContainer, Table, TableCaption, Thead, Tbody, Tr, Th, Td, Badge, Button } from '@chakra-ui/react';

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
    if (rows && rows.length > 0) {
      return (
        rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {renderRowCell(row)}
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
