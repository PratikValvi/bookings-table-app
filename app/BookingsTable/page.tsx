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
    ['5 hours ago', '7777', 'test10@mail.com', 'Liam Johnson', 'Website', 'Failed', ''],
    ['20 minutes ago', '8888', 'test11@mail.com', 'Ava Martinez', 'App', 'Paid', ''],
    ['2 hours ago', '9999', 'test12@mail.com', 'Noah Thompson', 'Website', 'Waiting', ''],
    ['3 days ago', '1010', 'test13@mail.com', 'Isabella White', 'App', 'Paid', ''],
    ['45 minutes ago', '1112', 'test14@mail.com', 'Mia Turner', 'Website', 'Waiting', ''],
    ['6 hours ago', '1212', 'test15@mail.com', 'Ethan Clark', 'App', 'Paid', ''],
    ['1 hour ago', '1313', 'test16@mail.com', 'Sophia Turner', 'Website', 'Paid', ''],
    ['2 days ago', '1414', 'test17@mail.com', 'Oliver Taylor', 'App', 'Failed', ''],
    ['1 day ago', '1515', 'test18@mail.com', 'Amelia Anderson', 'Website', 'Waiting', ''],
    ['4 hours ago', '1616', 'test19@mail.com', 'Jacob Wilson', 'App', 'Paid', ''],
    ['3 hours ago', '1717', 'test20@mail.com', 'Harper Brown', 'Website', 'Paid', ''],
    ['10 minutes ago', '1818', 'test21@mail.com', 'Benjamin Thompson', 'App', 'Waiting', ''],
    ['2 days ago', '1919', 'test22@mail.com', 'Mila Harris', 'Website', 'Paid', ''],
    ['1 hour ago', '2020', 'test23@mail.com', 'William Davis', 'App', 'Failed', ''],
    ['30 minutes ago', '2121', 'test24@mail.com', 'Scarlett Martinez', 'Website', 'Waiting', ''],
    ['4 hours ago', '2222', 'test25@mail.com', 'Henry Young', 'App', 'Paid', ''],
    ['15 minutes ago', '2323', 'test26@mail.com', 'Luna Anderson', 'Website', 'Paid', ''],
    ['1 day ago', '2424', 'test27@mail.com', 'Elijah Wilson', 'App', 'Waiting', ''],
    ['5 hours ago', '2525', 'test28@mail.com', 'Grace Turner', 'Website', 'Failed', ''],
    ['3 hours ago', '2626', 'test29@mail.com', 'Jackson Harris', 'App', 'Paid', ''],
    ['2 hours ago', '2727', 'test30@mail.com', 'Chloe Davis', 'Website', 'Paid', ''],
    ['20 minutes ago', '2828', 'test31@mail.com', 'Aiden Thompson', 'App', 'Waiting', ''],
    ['6 hours ago', '2929', 'test32@mail.com', 'Victoria Wilson', 'Website', 'Failed', ''],
    ['10 minutes ago', '3030', 'test33@mail.com', 'Lucas Harris', 'App', 'Paid', ''],
    ['1 day ago', '3131', 'test34@mail.com', 'Zoe Turner', 'Website', 'Paid', ''],
    ['15 minutes ago', '3232', 'test35@mail.com', 'Gabriel Davis', 'App', 'Waiting', ''],
    ['30 minutes ago', '3333', 'test36@mail.com', 'Penelope Harris', 'Website', 'Failed', ''],
    ['4 hours ago', '3434', 'test37@mail.com', 'Liam Wilson', 'App', 'Paid', ''],
    ['2 days ago', '3535', 'test38@mail.com', 'Hannah Turner', 'Website', 'Paid', ''],
    ['6 hours ago', '3636', 'test39@mail.com', 'Christopher Davis', 'App', 'Waiting', ''],
    ['1 hour ago', '3737', 'test40@mail.com', 'Sofia Harris', 'Website', 'Failed', ''],
    ['10 minutes ago', '3838', 'test41@mail.com', 'Grayson Turner', 'App', 'Paid', ''],
    ['5 hours ago', '3939', 'test42@mail.com', 'Aria Wilson', 'Website', 'Paid', ''],
    ['15 minutes ago', '4040', 'test43@mail.com', 'Carter Davis', 'App', 'Waiting', ''],
    ['2 hours ago', '4141', 'test44@mail.com', 'Scarlett Harris', 'Website', 'Failed', ''],
    ['1 day ago', '4242', 'test45@mail.com', 'Leo Turner', 'App', 'Paid', ''],
    ['30 minutes ago', '4343', 'test46@mail.com', 'Stella Wilson', 'Website', 'Paid', ''],
    ['4 hours ago', '4444', 'test47@mail.com', 'Julian Davis', 'App', 'Waiting', ''],
    ['20 minutes ago', '4545', 'test48@mail.com', 'Layla Harris', 'Website', 'Failed', ''],
    ['3 hours ago', '4646', 'test49@mail.com', 'Mason Turner', 'App', 'Paid', ''],
    ['1 hour ago', '4747', 'test50@mail.com', 'Avery Wilson', 'Website', 'Paid', ''],
  ];

  return (
    <Container flexDirection="column" maxWidth="fit-content" padding="10px 10px 0px 10px" height="100vh">
      <Heading>Bookings</Heading>
      <DataTable headers={headers} rows={rows} caption="Latest Bookings" sortable pagination />
    </Container>
  );
};
