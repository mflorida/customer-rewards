import { DetailsLink } from './DetailsLink';
import style from './style.module.scss';

// helper for easier adding up amounts in array
function sumAmounts(input) {
  return input.reduce((prev, curr) => (prev + curr));
}

export function CustomerRow(props) {

  const { count, customer } = props;

  console.log(count, customer.amounts);

  const amounts = customer.amounts;

  const customerTotals = {
    spent: amounts.map((item, i) => {
      return item.totals.spent;
    }).reduce((prev, curr) => prev + curr),
    rewards: amounts.map((item, i) => {
      return item.totals.rewards;
    }).reduce((prev, curr) => prev + curr)
  };

  const monthlyTotals = amounts.map(function(mo, i) {
    return {
      spentx: mo.spent.reduce(function(prev, curr) {
        return prev + curr;
      }),
      spent: sumAmounts(mo.spent),
      rewardsx: mo.rewards.reduce(function(prev, curr) {
        return prev + curr;
      }),
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
        <>
          <td>${item.spent}</td>
          <td>{item.rewards} pts</td>
          <td className={style.textCenter}><DetailsLink amounts={amounts[i]}>details</DetailsLink></td>
        </>
      ))}
      <td>${customerTotals.spent}</td>
      <td>{customerTotals.rewards}</td>
    </tr>
  );
}
