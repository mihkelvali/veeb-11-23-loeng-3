import { RAAMATUD } from './andmed';

const RaamatudList = ({ setValitudRaamat }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>{
            RAAMATUD.map((raamat) => (
                <a key={raamat.pealkiri} onClick={() => setValitudRaamat(raamat)}>{raamat.pealkiri}</a>
            ))
        }</div>
    )
}

export default RaamatudList;
