import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FiArrowRightCircle } from 'react-icons/fi';
// import covid from '../assets/covid.svg';

const CountryCard = ({ country }) => {
  const page = `/details/${country.Country}`;

  return (
    <Card key={country.Country} className="card border-0 p-2 country-card">
      <Card.Link href={page}>
        <div className="d-flex justify-content-between ps-3">
          {/* <img src={covid} alt="covid virus" className="map w-50 h-50" />  */}
          <FiArrowRightCircle />
        </div>
        <div className="text-end">
          <Card.Title>{country.Country}</Card.Title>
          <Card.Body>
            <Card.Text>
              {country}
            </Card.Text>
          </Card.Body>
        </div>
      </Card.Link>
    </Card>
  );
};

// CountryCard.propTypes = {
//   country: PropTypes.shape({
//     All: PropTypes.shape({
//       country: PropTypes.string,
//       TotalConfirmed: PropTypes.number,
//     }),
//   }).isRequired,
// };

export default CountryCard;