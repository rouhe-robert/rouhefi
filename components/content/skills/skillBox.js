import Stars from './stars';

export default ({item, translations}) => (
  <>
    <table>
      <tbody>
        <tr key={'item-' + item.name.en}>
          <td>
            <h5>{item.name[translations.code]}</h5>
          </td>
          <td>
            <Stars item={item} size="md"/>
          </td>
        </tr>
        {
          item.subitems.map(subitem => (
            <tr key={'item-' + subitem.name.en}>
              <td>
                <p>{subitem.name[translations.code]}</p>
              </td>
              <td>
                <Stars item={subitem} size="sm"/>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <style jsx>
      {`
        h5, p {
          margin: 0;
        }

        table {
          margin: 0 auto 1.5rem auto;
          max-width: 25rem;
          width: 100%;
        }

        td {
          padding: 0.5rem 0;
        }

        td:last-child {
          width: 8rem;
        }
      `}
    </style>
  </>
);