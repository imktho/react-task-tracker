import PropTypes from 'prop-types'


export const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

//CSS in JS
// const headingStyle = {
//     display: flex,
//     justify-content: space-between,
//     align-items: center,
//     margin-bottom: 20px
// }

export default Header