function HeroSearchForm() {
  return (
    <form>
      <div className="form-box">
        <label htmlFor="property">Search Property</label>
        <div className="input-box">
          <span></span>
          <input
            placeholder="Search by Property, Location or Landmark..."
            type="search"
            name="property"
            id="property"
          />
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default HeroSearchForm;
