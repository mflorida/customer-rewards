import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getJSON } from '../../scripts/getJSON';
import { Loading } from '../Loading';
import { CustomerRow } from './CustomerRow';

function CustomerTableHeader(props) {
  return (
    <thead>
    <tr>
      <th>Customer Name</th>
      {(new Array(props.count)).fill('').map((x, i) => (
        <th key={i} colSpan={3}>Month {i + 1}</th>
      ))}
      <th>Total Spent</th>
      <th>Total Points</th>
    </tr>
    </thead>
  );
}

export function CustomerTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      const { data: json = [] } = await getJSON('data/customerData.json', {
        signal: controller.signal
      });
      setData(json);
    })();

    return () => {
      // kill fetch when component unmounts
      controller.abort();
    };

  }, []);

  if (!data.length) {
    return <Loading/>;
  }

  // look at the first item to determine number of month header rows
  const monthCount = data[0]?.amounts?.length || 3;

  return (
    <Table striped bordered hover size="sm" variant={'dark'}>
      <CustomerTableHeader count={monthCount}/>
      <tbody>
      {data.map((item, idx) => (
        <CustomerRow key={idx} count={monthCount} customer={item}/>
      ))}
      </tbody>
    </Table>
  );
}
