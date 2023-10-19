import '../styles/layout/Dummy.scss'
import '../styles/layout/Dummy.scss';

const Dummy = ({ numberOfErrors }) => {
  const renderDummyClass = (errorNumber) => {
    return numberOfErrors >= errorNumber ? `error-${errorNumber}` : '';
  };

  return (
    <section className={`dummy error-${numberOfErrors}`}>
      <span className={`eye ${renderDummyClass(13)}`}></span>
      <span className={`eye ${renderDummyClass(12)}`}></span>
      <span className={`line ${renderDummyClass(11)}`}></span>
      <span className={`line ${renderDummyClass(10)}`}></span>
      <span className={`line ${renderDummyClass(9)}`}></span>
      <span className={`line ${renderDummyClass(8)}`}></span>
      <span className={`line ${renderDummyClass(7)}`}></span>
      <span className={`head ${renderDummyClass(6)}`}></span>
      <span className={`line ${renderDummyClass(5)}`}></span>
      <span className={`line ${renderDummyClass(4)}`}></span>
      <span className={`line ${renderDummyClass(3)}`}></span>
      <span className={`line ${renderDummyClass(2)}`}></span>
      <span className={`line ${renderDummyClass(1)}`}></span>
    </section>
  );
};

export default Dummy;

