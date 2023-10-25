import { useEffect, useState } from 'react';
import PersonList from '../components/PersonList/PersonList';
import { TrendPerson } from '../components/Api/Api';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    try {
      TrendPerson().then(response => {
        setPeople(response.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <PersonList person={people} />;
};

export default People;
