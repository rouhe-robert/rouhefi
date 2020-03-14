import theme from "../../../services/theme";

export default ({item, size}) => {

  const getClasses = starNumber => [
    'fas',
    'fa-star',
    starNumber <= item.stars ? 'active-star' : 'disabled-star',
    size + '-star'
  ].join(
    ' '
  );

  return (
    <>
      <div>
        {
          [1, 2, 3, 4, 5].map(starNumber => (
            <i
              className={getClasses(starNumber)}
              key={'star-' + item.name.en + '-' + starNumber}
            />
          ))
        }
      </div>
      <style jsx>
        {`
          .active-star {
            color: ${theme.colors.primary}
          }

          .disabled-star {
            color: ${theme.colors.grey}
          }

          div {
            float: right;
          }

          .md-star {
            font-size: 1.25rem;
          }

          .sm-star {
            font-size: 1rem;
          }
        `}
      </style>
    </>
  );
}