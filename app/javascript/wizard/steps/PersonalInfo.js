import React from 'react';

const PersonalInfo = ({
  onNext
}) => (
  <div className="card">
    <div className="card-header">
      Información Personal
    </div>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label htmlFor="first_name"> Nombre </label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="last_name"> Apellido </label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="phone"> Telefono </label>
          <input type="text" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onNext}> OK </button>
      </form>
    </div>
  </div>
);

export default PersonalInfo;
