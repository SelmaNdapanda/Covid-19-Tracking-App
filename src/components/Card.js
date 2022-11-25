import Card from 'react-bootstrap/Card';
import { FiArrowRightCircle } from 'react-icons/fi';

const CountryCard = ({ country, totalCases }) => {
  const page = `/details/${country}`;

  return (
    <Card key={country.Country} className="card border-0 p-2 country-card">
      <Card.Link href={page}>
        <div className="d-flex justify-content-between ps-3">
          <FiArrowRightCircle />
        </div>
        <div className="text-end">
          <Card.Title>{country.Country}</Card.Title>
          <Card.Body>
            <Card.Text className="card-text">
              {country} {' '} {totalCases}
            </Card.Text>
          </Card.Body>
        </div>
      </Card.Link>
    </Card>
  );
};

export default CountryCard;