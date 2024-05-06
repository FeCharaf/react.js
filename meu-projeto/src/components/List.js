import Item from './Item';

function List(props) {
    return (
    <>
     <h1>Minha Lista</h1>
     <ul>
        <Item marca="Ferrari" ano_lancamento={1985} />
        <Item marca="Fiat" ano_lancamento={1964} />
        <Item ano_lancamento={299} />
     </ul>
    
    </>
    )
}

export default List