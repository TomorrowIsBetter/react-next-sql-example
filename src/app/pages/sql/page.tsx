import styles from './sql.module.scss';

// TODO：怎么写同构的代码


const getData = async () => {
    const res = await fetch('http://localhost:3000/api/home')

    if (res.ok) {
        return res.json();
    }
}
const SqlPage = async () => {
    const data = await getData();
    console.log('===data', data);
    return (
        <div className={styles.sql} >
            hello, sql 数据请求
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}

export default SqlPage;
