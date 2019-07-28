import React, { Component } from 'react';

class MovingForm extends Component {
    constructor(props) {
        super(props);
        this.dniRef = React.createRef();
        this.inputFileRef = React.createRef();
        this.makeMove = this.makeMove.bind(this);
      }
    
      makeMove(e) {
        e.preventDefault();
        // const task = {
        //   dni: this.dniRef.current.value,
        //   file: this.inputFileRef.current.value, 
        // }
    
        //this.props.makeMove(task);
    
      }
    
      render() {
        return (
          <div className="container">
              <div className="row">
                <div class="col-6 offset-3">
                    <form onSubmit={this.makeMove}>
                        <div className="form-group">
                            <label for="dni">Cédula del transportador</label>
                            <input type="text" required ref={this.dniRef} className="form-control" id="dni" placeholder="1067938367" />
                        </div>
                        <div className="form-group">
                            <label for="task">Tareas</label>
                            <input type="file" required ref={this.inputFileRef} className="form-control-file" id="task" />
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

