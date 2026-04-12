import Stars from './stars';

export default ({skill, translations}) => (
  <>
    <table>
      <tbody>
        <tr key={'skill-' + skill.name.en}>
          <td>
            <h5>{skill.name[translations.code]}</h5>
          </td>
          <td>
            <Stars skill={skill} size="md"/>
          </td>
        </tr>
        {
          skill.subskills.map(subskill => (
            <tr key={'skill-subskill-' + subskill.name.en}>
              <td>
                <p>{subskill.name[translations.code]}</p>
              </td>
              <td>
                <Stars skill={subskill} size="sm"/>
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
          background: #ffffff;
          border: 1px solid #E1E1E1;
          border-radius: 14px;
          box-shadow: 0 8px 18px rgba(77, 83, 89, 0.06);
          margin: 0 auto 1.5rem auto;
          max-width: 25rem;
          overflow: hidden;
          width: 100%;
        }

        td {
          padding: 0.6rem 0;
        }

        td:last-child {
          width: 8rem;
        }

        tr:first-child td {
          padding-top: 0.9rem;
        }

        tr:last-child td {
          padding-bottom: 0.9rem;
        }

        td:first-child {
          padding-left: 0.95rem;
        }

        td:last-child {
          padding-right: 0.95rem;
        }
      `}
    </style>
  </>
);