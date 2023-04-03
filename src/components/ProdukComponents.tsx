import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function DarkExample() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Produk</th>
            <th>Kategori </th>
            <th>Merek</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
         <tr>
            <td></td>
            <td></td>
            <td>P</td>
            <td>p</td>
            <td></td>
         </tr>
        </tbody>
      </Table>
    );
  }
  
  export default DarkExample;