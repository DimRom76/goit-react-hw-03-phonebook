import PropTypes from 'prop-types';

export default function Filter({ handleInput }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        className="form_input"
        type="text"
        name="filter"
        onInput={handleInput}
      ></input>
    </>
  );
}

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
