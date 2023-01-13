import { Fragment } from 'react';
import { DetailsLink } from './DetailsLink';
import style from './style.module.scss';

// helper for easier adding up amounts in array
function sumAmounts(input) {
  return input.reduce((prev, curr) => (prev + curr));
}

export function CustomerRow(props) {

  const { customer } = props;
  const amounts = customer.amounts;

  const customerTotals = {
    spent: sumAmounts(amounts.map((item) => {
      return item.totals.spent;
    })),
    rewards: sumAmounts(amounts.map((item) => {
      return item.totals.rewards;
    }))
  };

  const monthlyTotals = amounts.map(function(mo) {
    return {
      spent: sumAmounts(mo.spent),
      rewards: sumAmounts(mo.rewards)
    };
  });

  return (
    <tr>
      <td style={{
        textAlign: 'left',
        paddingLeft: '10px'
      }}>{`${customer.firstName} ${customer.lastName}`}</td>
      {monthlyTotals.map((item, i) => (
        <Fragment key={i}>
          <td>${item.spent}</td>
          <td>{item.rewards} pts</td>
          <td className={style.textCenter}><DetailsLink amounts={amounts[i]}>details</DetailsLink></td>
        </Fragment>
      ))}
      <td>${customerTotals.spent}</td>
      <td>{customerTotals.rewards}</td>
    </tr>
  );
}
