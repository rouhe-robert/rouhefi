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