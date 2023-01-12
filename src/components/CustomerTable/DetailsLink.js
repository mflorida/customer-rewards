import { OverlayTrigger, Popover, Table } from 'react-bootstrap';
import style from './style.module.scss';

let popCount = 0;

export function DetailsLink(props) {

  const { amounts } = props;

  const counter = (new Array(amounts.spent.length)).fill('');

  const popId = 'pop' + (popCount += 1);

  const detailsPopover = (
    <Popover className={style.popover} id={popId}>
      {/*<Popover.Title>Details</Popover.Title>*/}
      <Popover.Body style={{ padding: '.5rem' }}>
        <Table striped bordered hover size="sm" style={{ margin: 0 }}>
          <thead>
          <tr>
            <th>Spent</th>
            <th>Points</th>
          </tr>
          </thead>
          <tbody>
          {counter.map(function(item, i) {
            return (
              <tr key={i}>
                <td>${amounts.spent[i]}</td>
                <td>{amounts.rewards[i]}</td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger rootClose={true} trigger="click" placement="right" overlay={detailsPopover}>
      <a className={style.link} href="#!">{props.children}</a>
    </OverlayTrigger>
  );

}
