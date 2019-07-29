import React, { Component } from 'react';

class MovingForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            file: null
        }
        this.dniRef = React.createRef();
        this.makeMove = this.makeMove.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this)
      }
    
      makeMove(e) {
        e.preventDefault();     
        
        const dni = this.dniRef.current.value;
    
        this.props.makeMove(dni, this.state.file);        
    
      }

      onChangeFile(e) {
        this.setState(
            {  
                file: e.target.files[0]
            }
        )
      }
    
      render() {
        return (
          <div className="container">
              <br />
              <div className="row">
                <div className="col-6 offset-3">
                    <form onSubmit={this.makeMove}>
                        <div className="form-group">
                            <label htmlFor="dni">Cédula del transportador</label>
                            <input type="text" required ref={this.dniRef} className="form-control" id="dni" placeholder="1067938367" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="task">Tareas</label>
                            <input type="file" onChange={this.onChangeFile} className="form-control-file" id="task" />
                            <small id="emailHelp" className="form-text text-muted">Seleccione un archivo de texto que contenga las tareas de la mudanza</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Procesar</button>
                    </form>
                </div>
            </div>
          </div>
        )
      }
}

export default MovingForm;

