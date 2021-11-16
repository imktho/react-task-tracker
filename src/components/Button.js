import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return (
        <button className='btn' style={{backgroundColor:color}}>
            {text}</button>
    );
}

export default Button

Button.defaultProps = {
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}