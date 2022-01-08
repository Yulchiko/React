import './Simpson.css';
// noinspection JSUnusedGlobalSymbols

function Simpson(props){
    let {name, pic, styleClass} = props
    console.log(props.name);
    return(
          <div className={styleClass}>
          <h2>{name}</h2>
          <img src={pic} alt=""/>
          </div>
    )
}

export default Simpson;