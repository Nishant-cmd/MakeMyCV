import Personal_Information from './person_information';
import Work_Experience from './work_experience';

export default function Details() {
  return (
    <main>
      <p>Start filling up your information !</p>
      <Personal_Information />
      <Work_Experience />
    </main>
  );
}
