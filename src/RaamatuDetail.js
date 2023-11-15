const RaamatuDetail = ({ raamat }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>Pealkiri: {raamat.pealkiri}</span>
          <span>Autor: {raamat.autor}</span>
          <span>Aasta: {raamat.aasta}</span>
          <span>Kirjeldus: {raamat.kirjeldus}</span>
          <img src={raamat.pilt} height="60" />
        </div>
    )
}

export default RaamatuDetail;
