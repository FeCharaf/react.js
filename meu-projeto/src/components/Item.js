import PropTypes from 'prop-types'; //Validação

function Item({ marca, ano_lancamento }) {
    return (
        <>
          <li>
            {marca} - {ano_lancamento}
          </li>
            
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: 'Faltou a marca'
}

export default Item