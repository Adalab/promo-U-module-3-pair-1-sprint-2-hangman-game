
const Dummy = ({ numberOfErrors }) =>{
    return(
    <>
    <section className={renderDummyClass(numberOfErrors)}>
            <span className={`dummy error-${numberOfErrors}`}></span>
          </section>;
    </>
    ) 
}

export default Dummy;


  