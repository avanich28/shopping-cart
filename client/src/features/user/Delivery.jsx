function Delivery() {
  return (
    <table className="mx-5 my-5 w-full gap-5 divide-y divide-slate-200 text-center">
      <tr className="[&>th]:pb-2">
        <th>Address</th>
        <th>Products</th>
        <th>Cost</th>
        <th>Date</th>
      </tr>
      <tr className="[&>td]:py-2">
        <td>Teparak, Samutprakarn</td>
        <td>10</td>
        <td>$200</td>
        <td>Tue Jul 02 2024</td>
      </tr>
      <tr>
        <td>Asok, Bangkok</td>
        <td>10</td>
        <td>$200</td>
        <td>Tue Jul 02 2024</td>
      </tr>
    </table>
  );
}

export default Delivery;
