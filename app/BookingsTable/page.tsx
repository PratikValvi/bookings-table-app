"use client"

import { Container, Heading } from '@chakra-ui/react';
import DataTable from '@/components/DataTable';

export default function BookingTablePage() {
  const headers = ['Timestamp', 'Purchase Id', 'Mail', 'Name', 'Source', 'Status', 'Select'];

  const rows = [
  ['25 minutes ago', '1234', 'example@mail.com', 'John Doe', 'Website', 'Paid', ''],
  ['1 hour ago', '5678', 'test@mail.com', 'Jane Smith', 'App', 'Waiting', ''],
  ['2 hours ago', '9876', 'test2@mail.com', 'Michael Johnson', 'Website', 'Paid', ''],
  ['15 minutes ago', '5432', 'test3@mail.com', 'Emily Brown', 'App', 'Failed', ''],
  ['1 day ago', '1111', 'test4@mail.com', 'David Lee', 'Website', 'Waiting', ''],
  ['3 hours ago', '2222', 'test5@mail.com', 'Sophia Young', 'App', 'Paid', ''],
  ['10 minutes ago', '3333', 'test6@mail.com', 'Daniel Wilson', 'Website', 'Paid', ''],
  ['4 hours ago', '4444', 'test7@mail.com', 'Olivia Taylor', 'App', 'Waiting', ''],
  ['2 days ago', '5555', 'test8@mail.com', 'James Anderson', 'Website', 'Failed', ''],
  ['30 minutes ago', '6666', 'test9@mail.com', 'Emma Harris', 'App', 'Paid', ''],
  ];

  return (
    <Container flexDirection="column" maxWidth="fit-content" padding="10px 10px 0px 10px" height="100vh">
      <Heading>Bookings</Heading>
      <DataTable headers={headers} rows={rows} caption="Latest Bookings" sortable pagination />
    </Container>
  );
};
