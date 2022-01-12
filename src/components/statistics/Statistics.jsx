import PropTypes from "prop-types";
import {
  Statistics,
  Title,
  StatList,
  Item,
  Percentage,
} from "../styles/statistics/Statistics.styled";
export default function Statistic(props) {
  const { title, stats } = props;
  return (
    <Statistics>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map((stat) => (
          <Item key={stat.id}>
            <span>{stat.label}</span>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Statistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
