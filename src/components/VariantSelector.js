import React, {Component} from 'react';

class VariantSelector extends Component {
  render() {
    return (
      (this.props.option.name == 'Color') ? 
      <div>
      {this.props.option.values.map((value, index) => {
        let active = { checked: (index == 0) ? 'checked="checked"' : ''}
        return(
          <label className="containerRadio" key={`${this.props.option.name}-${value.value}`} title={`${this.props.option.name} - ${value.value}`}>
            <input 
              type="radio" 
              //{...active}
              name={`${this.props.option.name}--${this.props.option.id}`}
              value={value.value} 
              onClick={this.props.handleOptionChange}
            />
            <span className="checkmark" style={{background: value.value}}></span>
          </label>
          )
          })
      }
      </div>
      :
      // <select
      //   className="Product__option"
      //   name={this.props.option.name}
      //   key={this.props.option.key}
      //   onChange={this.props.handleOptionChange}
      // >
      //   {this.props.option.values.map((value) => {
      //     return (
      //       <option value={value.value} key={`${this.props.option.name}-${value.value}`}>{`${value.value}`}</option>
      //     )
      //   })}
      // </select>
      <div>
      {this.props.option.values.map((value, index) => {
        if(value.value !== 'Default Title') {
          return(
            <label className="containerRadio" key={`${this.props.option.name}-${value.value}`} title={`${this.props.option.name} - ${value.value}`}>{value.value}
              <input 
                type="radio" 
                name={`${this.props.option.name}--${this.props.option.id}`}
                value={value.value} 
                onClick={this.props.handleOptionChange}
              />
              <span className="checkmark"></span>
            </label>
            )
          }
      })
      }
      </div>
    );
  }
}

export default VariantSelector;
